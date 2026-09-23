import prisma from "../lib/prisma.js";

//3. Listar Livros com Autores (GET /books): Retorna todos os livros cadastrados, trazendo junto os detalhes do respectivo autor utilizando o parâmetro include.
export async function getBooks(req, res) {
    try {
        const books = await prisma.books.findMany({
            include: {
                author: true
            }
        });
        return res.json(books);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            "error": "Erro ao consultar livros"
        });
    }
}

//5. Excluir Livro (DELETE /books/:id): Remove de forma definitiva um livro do catálogo.
export async function deleteBook(req, res) {
    try {
        const id = req.params.id;

        const book = await prisma.books.delete({
            where: { id },
        });

        return res.json(book);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            "error": "Erro ao deletar livro"
        });
    }
}

export async function getBookById(req, res) {
    try {
        const id = req.params.id;

        const book = await prisma.books.findUnique({
            where: { id },
            include: {
                author: true
            }
        });

        if (!book) {
            return res.status(404).json({
                "error": "Livro não encontrado"
            });
        }

        return res.json(book);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            "error": "Erro ao consultar livro"
        });
    }
}

// 4. Atualizar Livro (PUT /books/:id): Altera os dados de um livro específico localizado pelo ID.
export async function updateBook(req, res) {
    try {
        const id = req.params.id;
        console.log(id);
        const { title, release_year, author_id } = req.body;

        const normalizedTitle = title?.trim();
        const normalizedAuthorId = author_id?.trim();

        if (!normalizedTitle) {
            return res.status(400).json({
                error: "O título do livro não foi informado"
            });
        }

        if (
            release_year === undefined ||
            release_year === null ||
            (typeof release_year !== "string" && typeof release_year !== "number")
        ) {
            return res.status(400).json({
                error: "Informe o ano de lançamento do livro"
            });
        }

        const normalizedReleaseYear = Number(release_year);

        if (!Number.isInteger(normalizedReleaseYear)) {
            return res.status(400).json({
                error: "O ano de lançamento é inválido"
            });
        }

        if (!normalizedAuthorId) {
            return res.status(400).json({
                error: "O autor não foi informado"
            });
        }

        const book = await prisma.books.update({
            where: { id },
            data: {
                title: normalizedTitle,
                release_year: normalizedReleaseYear,
                author_id: normalizedAuthorId
            },
            include: {
                author: true
            }
        });

        return res.status(200).json(book);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            "error": "Erro ao atualizar livro"
        });
    }
}

//2. Criar Livro (POST /books): Cria um livro associando-o obrigatoriamente a um autor existente via author_id utilizando a relação do Prisma.
export async function createBook(req, res) {
    try {
        const { title, release_year, author_id } = req.body;

        const normalizedTitle = title?.trim();
        const normalizedAuthorId = author_id?.trim();

        if (!normalizedTitle) {
            return res.status(400).json({
                error: "O título do livro não foi informado"
            });
        }

        if (
            release_year === undefined ||
            release_year === null ||
            (typeof release_year !== "string" && typeof release_year !== "number")
        ) {
            return res.status(400).json({
                error: "Informe o ano de lançamento do livro"
            });
        }

        const normalizedReleaseYear = Number(release_year);

        if (!Number.isInteger(normalizedReleaseYear)) {
            return res.status(400).json({
                error: "O ano de lançamento é inválido"
            });
        }

        if (!normalizedAuthorId) {
            return res.status(400).json({
                error: "O autor não foi informado"
            });
        }

        const book = await prisma.books.create({
            data: {
                title: normalizedTitle,
                release_year: normalizedReleaseYear,
                author: {
                    connect: {
                        id: normalizedAuthorId
                    }
                }
            },
            include: {
                author: true
            }
        });

        return res.status(201).json(book);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Erro ao criar livro"
        });
    }
}
