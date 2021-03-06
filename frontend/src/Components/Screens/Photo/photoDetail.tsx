import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationState} from '@react-navigation/native';

interface Props {
  navigation: NavigationState;
}

var width = Dimensions.get('window').width;

const photoDetail = ({navigation}: Props) => {
  useEffect(() => {
    console.log('포토 디테일 페이지 시작');
  });

  return (
    <View style={styles.main}>
      <View style={styles.mainIn}>
        <Image
          source={require('../../../Assets/Image/test_03.png')}
          style={{width: width * 0.9, height: 300, margin: 8}}
        />

        {/* 내용 */}
        <View style={{backgroundColor: 'white', margin: 5, flex: 1}}>
          <Text style={styles.title}>이때 날씨 정말 좋았지</Text>

          <Text style={styles.tag}># 날씨 지렸다. # 그냥 하는 말</Text>

          <Text style={styles.content}>
            날이 정말 좋았따아아 내용을 작성하는 부분인데 너무 횡해 보여서 그냥
            아무말이나 등록해놓은건데 더이상 할말도 없고.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}>
          <Icon
            raised
            name="edit"
            type="font-awesome"
            color="#494747"
            onPress={() => {
              console.log('사진 수정한다.');
              navigation.navigate('PhotoEdit');
            }}
            size={23}
          />

          <Icon
            raised
            name="trash-o"
            type="font-awesome"
            color="#F78C75"
            onPress={() => {
              console.log('사진 지운다.');
              // 여기에 피드 삭제 메서드가 들어갑니다.

              alert('사진이 삭제되었습니다.');
            }}
            size={23}
          />
        </View>
      </View>
    </View>
  );
};

export default photoDetail;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'ivory',
    flex: 1,
  },
  mainIn: {
    flex: 1,
    margin: 7,
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'BMHANNAPro',
    fontSize: 20,
  },
  tag: {
    fontFamily: 'BMHANNAPro',
    marginTop: -7,
    color: 'blue',
    fontSize: 15,
  },
  content: {
    fontFamily: 'BMHANNAPro',
    marginTop: -7,
    fontSize: 16,
  },
});
