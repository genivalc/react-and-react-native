import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useMutation, useQuery} from '@apollo/client';
import {GET_ALL_LIFTS} from '../../Graphql/queries';
import {SET_LIFT_STATUS_MUTATION} from '../../Graphql/mutations';

const Home = () => {
  const {data, loading, refetch} = useQuery(GET_ALL_LIFTS);
  const [setLiftStatusMutation, setLiftStatusData] = useMutation(
    SET_LIFT_STATUS_MUTATION,
  );

  const handleStatusChange = (id: string, status: string) => {
    const newStatus = status === 'OPEN' ? 'CLOSED' : 'OPEN';

    setLiftStatusMutation({
      variables: {
        id,
        status: newStatus,
      },
    });
  };

  useEffect(() => {
    if (setLiftStatusData.called) {
      setLiftStatusData.reset();
      refetch();
    }
  }, []);

  if (loading || setLiftStatusData.loading) return <ActivityIndicator />;

  return (
    <FlatList
      data={data?.allLifts}
      renderItem={({item}) => (
        <Pressable onPress={() => handleStatusChange(item.id, item.status)}>
          <Text style={style.container}>
            {item.id} - {item.status}
          </Text>
        </Pressable>
      )}
    />
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    fontSize: 20,
    padding: 10,
  },
});
