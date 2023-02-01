INSERT INTO [dbo].[fabricante]
(
   [nombre]
)
VALUES
(
  @nombre
)

SELECT SCOPE_IDENTITY() AS eventId