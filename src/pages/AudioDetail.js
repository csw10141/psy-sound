import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';

function AudioDetail() {
  const { id } = useParams();
  const audioData = {
    1: { title: "01_Fallen angel", url: "/audio/sample1.mp3", img: "/images/sample1.png",description: "Fallen Angel", subdescription: "하나님보다 높아지고자 했던 범죄한 천사가 심판 받아 하늘에서 떨어지는 장면을 몽환적으로 표현한 작품이다. 하늘에서 떨어지는 모습은 타인에 의한 정죄, 판단으로 인한 것일 수도 있지만 자신이 지은 잘못으로 인해 스스로를 가두는 모양으로 보이기도 한다. 떨어지는 모습은 사14장에서 천사가 범죄후 하늘에서 쫒겨나 것에서 기안하며 이미지를 표현하였다."},
    2: { title: "02_실낙원", url: "/audio/sample2.mp3", img: "/images/sample2.png",description: "뱀의 꾀임에 넘어가 죄를 범하고, 심판을 받아 에덴동산에서 쫓겨나는 아담과 하와의 모습을 민화로 표현한 작품이다. 일월오봉도와 네 줄기의 강으로 하나님이 함께하신 에덴동산을 표현하고 이에 화염검을 의미하는 불꽃을 둘렀다. 쫓겨난 세상에는 용을 두어 사단의 세계임을 상징한다. 신과의 약속을 어김으로 아담과 하와가 쫓겨나는 세상은 고통과 근심과 수고와 괴로움만 있는 어두운 세상으로 대비하여 표현하였다."},
    3: { title: "03_두 나무", url: "/audio/sample3.mp3", img: "/images/sample3.png",description: "성서에 나오는 두 종류의 나무를 표현한 작품으로, 명암의 대비가 훌륭한 작품이다. 두 나무 모두 열매를 맺었지만 어두운 열매를 맺는 나무에는 어두운 짐승과 풍경이 펼쳐지고, 밝은 나무에는 밝은 열매와 맑은 풍경이 펼쳐진다. 나무를 사람이라고 하면 우리가 마음먹고 행동하기에 따라 그 결과가 달라질 것이다. 성서에서는 말과 행동을 나무의 열매라고도 표현되어 있다. 우리가 살아가면서 쌓아가는 말과 행위의 결과가 언젠가 재판대에 오른다면 당신은 어떤 나무로 나타날까?"},
    4: { title: "05_신기루", url: "/audio/sample5.mp3", img: "/images/sample5.png",description: "성경의 노아의 홍수 때 상황을 모티브로 찬란했던 도시들이 바다에 잠기고 의미가 없어진 세상을 표현한 작품이다. 창세기 9장에는 방주에 탄 8명의 노아의 식구 외에는 모두 물에 잠겼다고 기록되어 있다. 홍수가 일어나기 전 신은 노아를 통해 배에 타야 한다고 외치게 하였는데, 듣지 않은 많은 사람들은 결국 물 안에 잠겼고 입에 물이 들어올 때 비로소 후회하였다고 하였다. 이 작품은 어느 순간 사람들이 느끼는 허망감과 그 때 그 말을 들을걸 하는 후회의 감정들을 담은 동시에 현재 내 주변에서 방주를 타야한다고 외치는 사람을 떠오르게 한다. 가까이 혹은 멀리에서 나에게 손을 내미는 사람을 떠올리며 작품을 감상해보길 바란다."},
    5: { title: "06_심판 그리고 구원", url: "/audio/sample6.mp3", img: "/images/sample6.png",description: "구약성서 창세기에 기록된 물(노아때의 심판)과 불 재앙(롯 때의 심판)을 모티브로 한 작품으로 각자의 마음에 따른 선택이 심판과 구원이라는 결과로 이어짐을 표현했다. 여러 상황과 처지에 놓인 사람들의 다양한 감정들을 단순한 형태와 질감, 색채의 강렬함에서 오는 극명한 차이가 생동감을 더한다."},
    6: { title: "07_Tower of BABLE", url: "/audio/sample7.mp3", img: "/images/sample7.png",description: "T창세기 11장에 기록된 바벨탑을 표현한 작품이다. 바벨탑은 신보다 높아지고 자 지은 탑이다. 바벨탑의 존재를 알게 된 신은 심판을 내리고 하나였던 언어가 달라져 백성들이 여기저기로 흩어지게 된다. 결국 신도 인간들도 함께 하지않는 탑이 되어버린 바벨탑은 혼돈스럽고 단절된다. 작가는 바벨탑 사건을 투영하여 욕심과 탐욕으로 가득한 사람의 마음은 결국 혼돈스럽고 단절되며 그 마음들이 하나되지 못해 무너질 수 있다는 메시지를 작품에 담았다."},
    7: { title: "08_달콤한 유혹", url: "/audio/sample8.mp3", img: "/images/sample8.png",description: "창세기 11장에 기록된 바벨탑을 표현한 작품이다. 바벨탑은 신보다 높아지고 자 지은 탑이다. 바벨탑의 존재를 알게 된 신은 심판을 내리고 하나였던 언어가 달라져 백성들이 여기저기로 흩어지게 된다. 결국 신도 인간들도 함께 하지않는 탑이 되어버린 바벨탑은 혼돈스럽고 단절된다. 작가는 바벨탑 사건을 투영하여 욕심과 탐욕으로 가득한 사람의 마음은 결국 혼돈스럽고 단절되며 그 마음들이 하나되지 못해 무너질 수 있다는 메시지를 작품에 담았다."},
    8: { title: "12_사람의 마음", url: "/audio/sample12.mp3", img: "/images/sample12.png",description: "마13장의 밭의 이미지를 창공에서 내려다본 시점으로 패턴화 시켜 표현한 작품이다. 캔버스에 담긴 색상과 좌측 하단에서 시작된 불길을 통해 수확이 끝마친 밭임을 알 수 있다. 좋은 상품성을 가진 곡식을 수확한 밭에는 쭉정이, 가라지, 잡초같은 잔사들만 남게 되고 농부는 이것들을 태워 땅의 지력을 높인다. 이와 같은 자연의 이치처럼, 성경의 마13장을 통해서도 말씀의 씨가 사람의 마음 밭에 뿌려 졌음에도 추수 된 자가 있고, 남아 불태워지는 자가 있음을 알 수 있다."},
  };

  const audio = audioData[id];

  return (
    <div className="audio-detail-page" style={{ backgroundImage: `url(${audio.img})` }}>
      <div className="overlay">
        <div className="container mt-4 text-white">
          <h2>{audio.title}</h2>
          <p>{audio.description}</p>
          <p>{audio.subdescription}</p>
        </div>
      </div>
      <AudioPlayer src={audio.url} />
    </div>
  );
}

export default AudioDetail;
