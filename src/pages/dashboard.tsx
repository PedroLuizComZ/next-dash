import { Haeder } from "../components/Haeder";
import dynamic from "next/dynamic";
import { Sidebar } from "../components/Sidebar";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom : {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels :{
    enabled : false
  },
  tooltip: {
    enabled: false
  },
};

const series = [
  {
    name: "series1",
    data: [31, 130, 10, 28, 31],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Haeder />

      <Flex w="100vw" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
