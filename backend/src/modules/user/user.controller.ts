import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // 1. Verificar se usuário já existe
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) return res.status(400).json({ error: "Usuário já existe" });

    // 2. Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 8);

    // 3. Salvar no banco
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar usuário" });
  }
};