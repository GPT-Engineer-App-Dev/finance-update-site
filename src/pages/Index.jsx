import { Container, Text, VStack, Heading, Box, Image, Grid, GridItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="xl" textAlign="center" mb={4}>
            Financial Times
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your source for the latest financial news and analysis.
          </Text>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="10" bg="blue.500" borderRadius="md" boxShadow="md">
            <Image src="/images/financial-news-1.jpg" alt="Financial News 1" borderRadius="md" />
            <Text mt={2} fontSize="md" fontWeight="bold">Market Trends</Text>
            <Text fontSize="sm">Stay updated with the latest market trends and insights.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500" borderRadius="md" boxShadow="md">
            <Image src="/images/financial-news-2.jpg" alt="Financial News 2" borderRadius="md" />
            <Text mt={2} fontSize="md" fontWeight="bold">Investment Tips</Text>
            <Text fontSize="sm">Get expert advice on how to make smart investments.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500" borderRadius="md" boxShadow="md">
            <Image src="/images/financial-news-3.jpg" alt="Financial News 3" borderRadius="md" />
            <Text mt={2} fontSize="md" fontWeight="bold">Economic Analysis</Text>
            <Text fontSize="sm">In-depth analysis of the current economic landscape.</Text>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;