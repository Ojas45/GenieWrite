import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx", // Use forward slashes for the path
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_YQB1FKl5TagN@ep-crimson-term-a11xrzcd.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require",
  },
});