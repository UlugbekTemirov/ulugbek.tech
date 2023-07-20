"use client";

import { Container } from "postcss";
import React from "react";
import ThemeToggler from "../theme-toggler";

const Index = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <ThemeToggler />
        </div>
      </Container>
    </div>
  );
};

export default Index;
