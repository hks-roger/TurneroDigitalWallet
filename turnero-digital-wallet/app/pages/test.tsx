"use client";

import { Link } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";

const Test = () => {
  return (
    <Box>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
    </Box>
  );
};

export default Test;
