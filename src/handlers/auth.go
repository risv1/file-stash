package handlers

import "github.com/gofiber/fiber/v2"

func Login(c *fiber.Ctx) error {
	var user struct {
		Email string `json:"email"`
		Password string `json:"password"`
	}
	if err := c.BodyParser(&user); err != nil {
		return err
	}
	return c.JSON(user)
}