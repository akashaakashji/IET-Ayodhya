import mongoose from "mongoose";

const fileLogSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: true
  },
  fileName: {
    type: String
  },
  ipAddress: {
    type: String
  },
  accessedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("FileLog", fileLogSchema);