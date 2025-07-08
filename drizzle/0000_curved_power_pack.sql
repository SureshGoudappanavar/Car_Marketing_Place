-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "carImages" (
	"id" serial PRIMARY KEY NOT NULL,
	"imageUrl" varchar NOT NULL,
	"carListingId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "carListing" (
	"id" serial PRIMARY KEY NOT NULL,
	"vehicleModel" varchar NOT NULL,
	"fuelType" varchar NOT NULL,
	"transmission" varchar NOT NULL,
	"price" varchar NOT NULL,
	"mileage" varchar NOT NULL,
	"year" varchar NOT NULL,
	"color" varchar,
	"doors" varchar,
	"seats" varchar,
	"description" varchar,
	"features" jsonb,
	"createdBy" varchar NOT NULL,
	"postedOn" varchar,
	"category" varchar,
	"condition" varchar,
	"make" varchar,
	"originalPrice" varchar,
	"sellingPrice" varchar,
	"driveType" varchar,
	"offerType" varchar,
	"userName" varchar NOT NULL,
	"userImageUrl" varchar DEFAULT 'https://tse4.mm.bing.net/th?id=OIP.GCSmU3yVYAm6IgDAUlsI4QHaG8&pid=Api&P=0&h=180',
	"offerPrice" varchar DEFAULT 'Not Made any Offer'
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "carImages" ADD CONSTRAINT "carImages_carListingId_carListing_id_fk" FOREIGN KEY ("carListingId") REFERENCES "public"."carListing"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/