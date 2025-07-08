import { pgTable, foreignKey, serial, varchar, integer, jsonb } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const carImages = pgTable("carImages", {
	id: serial("id").primaryKey().notNull(),
	imageUrl: varchar("imageUrl").notNull(),
	carListingId: integer("carListingId").notNull(),
},
(table) => {
	return {
		carImagesCarListingIdCarListingIdFk: foreignKey({
			columns: [table.carListingId],
			foreignColumns: [carListing.id],
			name: "carImages_carListingId_carListing_id_fk"
		}).onDelete("cascade"),
	}
});

export const carListing = pgTable("carListing", {
	id: serial("id").primaryKey().notNull(),
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
	features: jsonb("features"),
	createdBy: varchar("createdBy").notNull(),
	postedOn: varchar("postedOn"),
	category: varchar("category"),
	condition: varchar("condition"),
	make: varchar("make"),
	originalPrice: varchar("originalPrice"),
	sellingPrice: varchar("sellingPrice"),
	driveType: varchar("driveType"),
	offerType: varchar("offerType"),
	userName: varchar("userName").notNull(),
	userImageUrl: varchar("userImageUrl").default('https://tse4.mm.bing.net/th?id=OIP.GCSmU3yVYAm6IgDAUlsI4QHaG8&pid=Api&P=0&h=180'),
	offerPrice: varchar("offerPrice").default('Not Made any Offer'),
});