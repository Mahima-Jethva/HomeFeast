const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Kitchen = require("./models/Kitchen");

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB for seeding...");

    // Clear existing collections completely
    await User.deleteMany({});
    await Kitchen.deleteMany({});

    // Hash Default Password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Create Initial Testing Users
    const users = await User.insertMany([
      {
        fullName: "System Admin",
        email: "admin@homefeast.com",
        password: hashedPassword,
        role: "admin",
        status: "active",
        isVerified: true,
      },
      {
        fullName: "Sanjay Sharma",
        email: "cook@homefeast.com",
        password: hashedPassword,
        role: "cook",
        status: "approved",
        isVerified: true,
      },
      {
        fullName: "Mahima Jethva",
        email: "customer@homefeast.com",
        password: hashedPassword,
        role: "eater",
        status: "active",
        isVerified: true,
      },
    ]);

    // Create Sample Kitchen Linked to Sanjay Sharma
    const cookUser = users.find((u) => u.role === "cook");
    await Kitchen.create({
      cookId: cookUser._id,
      cookName: cookUser.fullName,
      cuisine: "NORTH INDIAN",
      city: "Mumbai",
      price: 165,
      subscriptionPrice: 3800,
      desc: "Slow-cooked Punjabi comfort food made fresh daily.",
      bgColor: "bg-[#E6B37C]",
    });

    console.log("Fresh Database Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedDatabase();