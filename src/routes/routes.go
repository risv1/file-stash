package routes

import (
	"file-stash/src/handlers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App){
	app.Get("/", handlers.HelloWorld)
	app.Post("/login", handlers.Login)
}