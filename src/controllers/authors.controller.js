import prisma from "../lib/prisma.js";

//1. Criar Autor (POST /authors): Salva um novo autor no banco de dados.
export async function createAuthor(req, res) {
    try {
        const { name, biography } = req.body;

        const normalizedName = name.trim();
        const normalizedBiography = biography?.trim() || null;

        const textualRegex = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*$/

        if (!textualRegex.test(normalizedName)) {
            return res.status(400).json({
                error: "O nome do autor contém caracteres inválidos"
            });
        }

        if (normalizedBiography && textualRegex.test(normalizedBiography)) {
            return res.status(400).json({
                error: "A biografia contém caracteres inválidos"
            });
        }

        const author = await prisma.authors.create({
            data: {
                name: normalizedName,
                biography: normalizedBiography
            },
            include: {
                books: true,
            }
        });

        return res.status(201).json(author);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Erro ao criar autor"
        });
    }
}

