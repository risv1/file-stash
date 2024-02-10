package handlers

import (
	"context"
	"fmt"
	"io"
	"os"
	"github.com/gofiber/fiber/v2"
	firebase "firebase.google.com/go"
	"github.com/google/uuid"
	"github.com/joho/godotenv"
	"google.golang.org/api/option"
)

func StoreFile(c *fiber.Ctx) error{
	godotenv.Load(".env")

	opt := option.WithCredentialsFile("serviceAccountKey.json")
	useApp, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
	 	fmt.Printf("error initializing app: %v", err)
	}
  
	client, err:=useApp.Storage(context.TODO())
	if err != nil {
		fmt.Printf("error getting storage client: %v", err)
	}

	bucketHandle, err := client.Bucket((os.Getenv("BUCKET_NAME")))
	if err!=nil{
		fmt.Printf("error getting bucket handle: %v", err)
	}

	fileHeader, err := c.FormFile("file")
	if err != nil {
		fmt.Printf("error retrieving file from form: %v", err)
		return err
	}

	file, err := fileHeader.Open()
	if err != nil {
		fmt.Printf("error opening file: %v", err)
		return err
	}
	defer file.Close()

	objectHandle := bucketHandle.Object(fileHeader.Filename)

	writer := objectHandle.NewWriter(context.Background())

	id := uuid.New()
	writer.ObjectAttrs.Metadata = map[string]string{"DownloadTokens": id.String()}
	defer writer.Close()

	if _, err := io.Copy(writer, file); err != nil {
		fmt.Printf("error copying file to bucket: %v", err)
		return err
	}

	return c.JSON("file uploaded successfully!")
}