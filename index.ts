import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "山田太郎",
      email: "yama@taro.com",
      posts: {
        create: { title: "こんにちは タイトル" },
      },
      profile: {
        create: { bio: "僕は、サッカーが好きです。" },
      },
    },
  });
  const allUsers = await prisma.user.findMany();
  console.log("allUsers");
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    // DB接続を閉じる
    await prisma.$disconnect();
  });
