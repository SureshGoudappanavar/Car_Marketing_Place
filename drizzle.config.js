/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:Cw8PMX5txnWS@ep-orange-sound-a5gonbvu.us-east-2.aws.neon.tech/car-marketplace?sslmode=require',
    }
  };