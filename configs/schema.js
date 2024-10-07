// import { pgTable, serial, varchar, jsonb, integer } from "drizzle-orm/pg-core";

// // CarListing table definition
// export const CarListing = pgTable('carListing', {
//   id: serial('id').primaryKey(),
//   vehicleModel: varchar('vehicleModel').notNull(),
//   fuelType: varchar('fuelType').notNull(),
//   transmission: varchar('transmission').notNull(),
//   price: varchar('price').notNull(),
//   mileage: varchar('mileage').notNull(),
//   year: varchar('year').notNull(),
//   color: varchar('color'),
//   doors: varchar('doors'),
//   seats: varchar('seats'),
//   description: varchar('description'),
//   features: jsonb('features'),
// });

// // CarImages table definition
// export const CarImages = pgTable('carImages', {
//   id: serial('id').primaryKey(),
//   imageUrl: varchar('imageUrl').notNull(),
//   carListingId: integer('carListingId')  // Use snake_case consistently
//     .notNull()
//     .references(() => CarListing.id),  // Correct foreign key reference
// });


// import { pgTable, serial, varchar, jsonb, foreignKey, integer } from "drizzle-orm/pg-core"
// import { sql } from "drizzle-orm"




// export const CarListing = pgTable("CarListing", {
//     id: serial("id").primaryKey().notNull(),
//     vehicleModel: varchar("vehicleModel").notNull(),
//     fuelType: varchar("fuelType").notNull(),
//     transmission: varchar("transmission").notNull(),
//     price: varchar("price").notNull(),
//     mileage: varchar("mileage").notNull(),
//     year: varchar("year").notNull(),
//     color: varchar("color"),
//     doors: varchar("doors"),
//     seats: varchar("seats"),
//     description: varchar("description"),
//     features: jsonb("features"),
//    createdBy: varchar('createdBy').notNull(),
//    postedOn:varchar('postedOn')
// });

// // CarImages table definition
// // export const carImages = pgTable('carImages', {
// //   id: serial('id').primaryKey(),
// //   imageUrl: varchar('imageUrl').notNull(),
// //   carListingId: integer('carListingId')
// //     .notNull()
// //     .references(() => carListing.id, { onDelete: 'CASCADE' }), // Enable cascading deletes
// // });
// export const CarImages = pgTable('CarImages', {
//   id: serial('id').primaryKey(), // Primary key for carImages
//   imageUrl: varchar('imageUrl').notNull(), // URL of the image, must not be null
//   carListingId: integer('carListingId') .notNull()
//     .references(() => CarListing.id) // Cascade delete when carListing is deleted
// });



import Category from "@/components/Category";
import { pgTable, serial, varchar, jsonb, integer } from "drizzle-orm/pg-core";

// CarListing table definition
export const CarListing = pgTable("carListing", {
  id:serial("id").primaryKey().notNull(), // Primary key
  vehicleModel: varchar("vehicleModel").notNull(),
  fuelType: varchar("fuelType").notNull(),
  transmission: varchar("transmission").notNull(),
  price: varchar("price").notNull(),
  mileage: varchar("mileage").notNull(),
  year: varchar("year").notNull(),
  color: varchar("color"),
  doors: varchar("doors"),
  seats: varchar("seats"),
  description: varchar("description"),
  features: jsonb("features"), // JSONB for storing car features
  createdBy: varchar('createdBy').notNull(),
  postedOn: varchar('postedOn'),
  category:varchar('category'),
});

// CarImages table definition
export const CarImages = pgTable("carImages", {
  id: serial("id").primaryKey(), // Primary key
  imageUrl: varchar("imageUrl").notNull(), // Image URL, must not be null
  carListingId:integer("carListingId").notNull()// Foreign key reference to CarListing
    .references(() => CarListing.id, { onDelete: "CASCADE" }) // Cascade on delete

    
});
