Schema = {};

// MedsSchema = new SimpleSchema({
//   medName: {
//     type: String,
//     label:"Medicine Name",
//     regEx: /^[a-zA-Z-]{2,25}$/,
//   },
//   measureUnit: {
//     type: String,
//     label:"Measurement unit",
//     regEx: /^[a-zA-Z-]{2,25}$/,
//   },
//   availableStrengths: {
//     type: [Number],
//     label: "Available Strengths",
//     decimal: true,
//     min:0,
//   },
//   active: {
//     type: Boolean,
//     label:"Active?",
//     regEx: /^[a-zA-Z-]{2,25}$/,
//   }
// });

// MedDosesSchema = new SimpleSchema({
//   morn: {
//     type: Number,
//     label: "Morn",
//     decimal: true,
//     min: 0,
//     defaultValue: 0
//   },
//   mid: {
//     type: Number,
//     label: "Mid",
//     decimal: true,
//     min: 0,
//     defaultValue: 0
//   },
//   eve: {
//     type: Number,
//     label: "Eve",
//     decimal: true,
//     min: 0,
//     defaultValue: 0
//   },
//     night: {
//     type: Number,
//     label: "Night",
//     decimal: true,
//     min: 0,
//     defaultValue: 0
//   }
// });

// Schema.MedTrackDataSchema = new SimpleSchema({
//   meds: {
//     type: MedsSchema,
//     label: "Your Medicines"
//   },
//   medStrength: {
//     type: Number,
//     label: "Strength"
//    // allowedValues: MedsSchema.availableStrengths
//   },
//   medDoses: {
//     type: MedDosesSchema,
//     label: "Dosage"
//   },
//   medActive: {
//     type: Boolean,
//     label: "Active?"
//   },
//   medNotes: {
//     type: String,
//     label: "Notes"
//   }
// });

// Meds = new Mongo.Collection("meds");
// Meds.attachSchema(MedsSchema);

// MedDoses = new Mongo.Collection("medDoses");
// MedDoses.attachSchema(MedDosesSchema);

// // MedTrackData = new Mongo.Collection("medTrackData");
// // MedTrackData.attachSchema(MedTrackDataSchema);

// // Meds.insert({
// //   medName: "Bisoprolol",
// //   measureUnit: "mg",
// //   availableStrengths: [1.25, 2.5, 3.75, 5, 7.5, 10],
// //   active: true
// // })