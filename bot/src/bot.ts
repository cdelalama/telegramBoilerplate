import { Bot } from "grammy";
import dotenv from "dotenv";
import path from "path";

// Cargar variables de entorno con ruta absoluta
dotenv.config({ path: path.join(__dirname, '../../bot/.env') });

// Verificar que existe BOT_TOKEN
if (!process.env.BOT_TOKEN) {
    throw new Error('BOT_TOKEN debe estar definido en las variables de entorno!');
}

// Crear instancia del bot
const bot = new Bot(process.env.BOT_TOKEN);

// Manejador del comando start
bot.command("start", async (ctx) => {
    try {
        await ctx.reply("¡Hola! Bot iniciado correctamente.");
    } catch (error) {
        console.error("Error en el comando start:", error);
    }
});

// Iniciar el bot
try {
    bot.start();
    console.log("¡Bot iniciado exitosamente!");
} catch (error) {
    console.error("Error al iniciar el bot:", error);
}