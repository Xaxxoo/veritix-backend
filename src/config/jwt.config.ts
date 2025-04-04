import { registerAs } from "@nestjs/config";

export default registerAs("jwt", () => ({
  // secret: process.env.JWT_SECRET || "veritixisgivingmeheadache",
  secret: String(process.env.JWT_SECRET || 'veritixisgivingmeheadache'),
  audience: process.env.JWT_TOKEN_AUDIENCE || "your_audience",
  issuer: process.env.JWT_TOKEN_ISSUER || "your_issuer",
  expiresIn: process.env.JWT_EXPIRATION || "3600s",
  refreshExpiresIn: process.env.JWT_REFRESH_TOKEN_TTL || "7d",
}));
