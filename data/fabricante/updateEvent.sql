UPDATE [dbo].[fabricante]
SET [nombre] = @nombre
WHERE [fabricante_id] = @fabricante_id

SELECT [fabricante_id],
       [nombre]
FROM [dbo].[fabricante]
WHERE [fabricante_id] = @fabricante_id