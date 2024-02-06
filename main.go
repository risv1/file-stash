package main

import (
	"file-stash/src/routes"
	"github.com/gofiber/fiber/v2"
	"file-stash/src/middlewares"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main(){
	app := fiber.New();

	app.Use(cors.New(middlewares.CorsConfig))

    routes.Setup(app)

    app.Listen(":8000")
}