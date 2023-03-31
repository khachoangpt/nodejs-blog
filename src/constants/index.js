"use strict";

const UserRoles = {
  USER: "USER",
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
  WRITER: "WRITER",
};

const HEADER = {
  API_KEY: "x-api-key",
  CLIENT_ID: "x-client-id",
  AUTHORIZATION: "authorization",
};

const PERMISSIONS = ["0000", "1111", "2222"];

module.exports = {
  UserRoles,
  HEADER,
  PERMISSIONS,
};
