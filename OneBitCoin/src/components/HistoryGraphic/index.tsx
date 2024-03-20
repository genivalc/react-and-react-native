import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function HistoryGraphic(props: any) {
  return (
    <View >
<LineChart
    data={{
      labels: [""],
      datasets: [
        {
          data: props.infoDataGraphic
        },
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    withVerticalLabels={false}
    withVerticalLines={false}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#111",
      backgroundGradientFrom: "#333",
      backgroundGradientTo: "#222",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      propsForDots: {
        r: "6",
        strokeWidth: "1",
        stroke: "#861d1d"
      }
    }}
    bezier
  />
    </View>
  );
}