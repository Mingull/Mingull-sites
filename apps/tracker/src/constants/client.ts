"use client";
import { createClientConstants } from "@mingull/constants/react";
import { constants } from "./localized";

export const { ConstantsProvider, useConstants } = createClientConstants(constants);
