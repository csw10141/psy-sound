import React, { useState } from 'react';
import AudioList from '../components/AudioList';

function Home() {
  const [audios] = useState([
    { id:1, title: "01_Fallen Angel", url: "/audio/01.mp3", img: "/images/01.png",description: "Fallen Angel", subdescription: "하나님보다 높아지고자 했던 범죄한 천사가 심판 받아 하늘에서 떨어지는 장면을 몽환적으로 표현한 작품이다. 하늘에서 떨어지는 모습은 타인에 의한 정죄, 판단으로 인한 것일 수도 있지만 자신이 지은 잘못으로 인해 스스로를 가두는 모양으로 보이기도 한다. 떨어지는 모습은 사14장에서 천사가 범죄후 하늘에서 쫒겨나 것에서 기안하며 이미지를 표현하였다."},
    { id:2, title: "02_실낙원(에덴에서 쫓겨난 아담과 하와)", url: "/audio/02.mp3", img: "/images/02.png",description: "뱀의 꾀임에 넘어가 죄를 범하고, 심판을 받아 에덴동산에서 쫓겨나는 아담과 하와의 모습을 민화로 표현한 작품이다. 일월오봉도와 네 줄기의 강으로 하나님이 함께하신 에덴동산을 표현하고 이에 화염검을 의미하는 불꽃을 둘렀다. 쫓겨난 세상에는 용을 두어 사단의 세계임을 상징한다. 신과의 약속을 어김으로 아담과 하와가 쫓겨나는 세상은 고통과 근심과 수고와 괴로움만 있는 어두운 세상으로 대비하여 표현하였다."},
    { id:3, title: "03_두 나무(생명나무와 선악을 알게 하는 나무)", url: "/audio/03.mp3", img: "/images/03.png",description: "성서에 나오는 두 종류의 나무를 표현한 작품으로, 명암의 대비가 훌륭한 작품이다. 두 나무 모두 열매를 맺었지만 어두운 열매를 맺는 나무에는 어두운 짐승과 풍경이 펼쳐지고, 밝은 나무에는 밝은 열매와 맑은 풍경이 펼쳐진다. 나무를 사람이라고 하면 우리가 마음먹고 행동하기에 따라 그 결과가 달라질 것이다. 성서에서는 말과 행동을 나무의 열매라고도 표현되어 있다. 우리가 살아가면서 쌓아가는 말과 행위의 결과가 언젠가 재판대에 오른다면 당신은 어떤 나무로 나타날까?"},
    { id:4, title: "04_홍수", url: "/audio/04.mp3", img: "/images/04.png",description: "성경의 노아의 홍수 때 상황을 모티브로 찬란했던 도시들이 바다에 잠기고 의미가 없어진 세상을 표현한 작품이다. 창세기 9장에는 방주에 탄 8명의 노아의 식구 외에는 모두 물에 잠겼다고 기록되어 있다. 홍수가 일어나기 전 신은 노아를 통해 배에 타야 한다고 외치게 하였는데, 듣지 않은 많은 사람들은 결국 물 안에 잠겼고 입에 물이 들어올 때 비로소 후회하였다고 하였다. 이 작품은 어느 순간 사람들이 느끼는 허망감과 그 때 그 말을 들을걸 하는 후회의 감정들을 담은 동시에 현재 내 주변에서 방주를 타야한다고 외치는 사람을 떠오르게 한다. 가까이 혹은 멀리에서 나에게 손을 내미는 사람을 떠올리며 작품을 감상해보길 바란다."},
    { id:5, title: "05_신기루", url: "/audio/05.mp3", img: "/images/05.png",description: "구약성서 창세기에 기록된 물(노아때의 심판)과 불 재앙(롯 때의 심판)을 모티브로 한 작품으로 각자의 마음에 따른 선택이 심판과 구원이라는 결과로 이어짐을 표현했다. 여러 상황과 처지에 놓인 사람들의 다양한 감정들을 단순한 형태와 질감, 색채의 강렬함에서 오는 극명한 차이가 생동감을 더한다."},
    { id:6, title: "06_심판 그리고 구원", url: "/audio/06.mp3", img: "/images/06.png",description: "창세기 11장에 기록된 바벨탑을 표현한 작품이다. 바벨탑은 신보다 높아지고 자 지은 탑이다. 바벨탑의 존재를 알게 된 신은 심판을 내리고 하나였던 언어가 달라져 백성들이 여기저기로 흩어지게 된다. 결국 신도 인간들도 함께 하지않는 탑이 되어버린 바벨탑은 혼돈스럽고 단절된다. 작가는 바벨탑 사건을 투영하여 욕심과 탐욕으로 가득한 사람의 마음은 결국 혼돈스럽고 단절되며 그 마음들이 하나되지 못해 무너질 수 있다는 메시지를 작품에 담았다."},
    { id:7, title: "07_Tower of BABLE", url: "/audio/07.mp3", img: "/images/07.png",description: "창세기 11장에 기록된 바벨탑을 표현한 작품이다. 바벨탑은 신보다 높아지고 자 지은 탑이다. 바벨탑의 존재를 알게 된 신은 심판을 내리고 하나였던 언어가 달라져 백성들이 여기저기로 흩어지게 된다. 결국 신도 인간들도 함께 하지않는 탑이 되어버린 바벨탑은 혼돈스럽고 단절된다. 작가는 바벨탑 사건을 투영하여 욕심과 탐욕으로 가득한 사람의 마음은 결국 혼돈스럽고 단절되며 그 마음들이 하나되지 못해 무너질 수 있다는 메시지를 작품에 담았다."},
    { id:8, title: "08_달콤한 유혹(무너진 바벨탑)", url: "/audio/08.mp3", img: "/images/08.png",description: "마13장의 밭의 이미지를 창공에서 내려다본 시점으로 패턴화 시켜 표현한 작품이다. 캔버스에 담긴 색상과 좌측 하단에서 시작된 불길을 통해 수확이 끝마친 밭임을 알 수 있다. 좋은 상품성을 가진 곡식을 수확한 밭에는 쭉정이, 가라지, 잡초같은 잔사들만 남게 되고 농부는 이것들을 태워 땅의 지력을 높인다. 이와 같은 자연의 이치처럼, 성경의 마13장을 통해서도 말씀의 씨가 사람의 마음 밭에 뿌려 졌음에도 추수 된 자가 있고, 남아 불태워지는 자가 있음을 알 수 있다."},
    { id:9, title: "09_심판의 시간(여리고성 정복)", url: "/audio/09.mp3", img: "/images/09.png",description: "마13장의 밭의 이미지를 창공에서 내려다본 시점으로 패턴화 시켜 표현한 작품이다. 캔버스에 담긴 색상과 좌측 하단에서 시작된 불길을 통해 수확이 끝마친 밭임을 알 수 있다. 좋은 상품성을 가진 곡식을 수확한 밭에는 쭉정이, 가라지, 잡초같은 잔사들만 남게 되고 농부는 이것들을 태워 땅의 지력을 높인다. 이와 같은 자연의 이치처럼, 성경의 마13장을 통해서도 말씀의 씨가 사람의 마음 밭에 뿌려 졌음에도 추수 된 자가 있고, 남아 불태워지는 자가 있음을 알 수 있다."},
    { id:10, title: "10_FIVE PIECES(뜨인 돌의 심판)", url: "/audio/10.mp3", img: "/images/10.png",description: "수6장의 기록된 여리고성의 심판 장면이다. 여리고성은 난공불락이라고 할 만큼 견고하고 튼튼하여 사람의 힘으로는 정복하기 어려운 요새과 같은 성이었다. 이 성을 정복한 사람들은 이를 알고 6일동안 하루에 한 바퀴씩을 돌고 7째 날에 일곱 바퀴를 돌며 양각나팔을 불며 소리쳤고, 이 때 기반이 약해진 성 주변이 무너지며 성도 무너지게 되었다. 이러한 지혜는 하나님께서 직접 알려주신 지혜였다. 조선의 왕이 한번의 재심을 주었듯 신도 7일동안 돌면서 기회를 준 것은 아닐까? 하지만 성 안에 있는 사람들은 기회로 여기지 않았을 것 같다. 이 그림을 보는 당신도 그런 것은 아닐까?"},
    { id:11, title: "11_The Last generation(육적 이스라엘의 끝)", url: "/audio/11.mp3", img: "/images/11.png",description: "의자에 앉아있는 제사장은 초림때 예수님을 영접하지 않았던 당대 유대인을 상징한다. 모든 것을 가졌으나 홀로 앉은 모습이 어딘가 쓸쓸해 보이는 권세자의 모습이 담긴 그림이다. 권세자는 자신의 힘과 능력을 강조하기 위해 각종 보석과 비싼 옷 등으로 꾸몄으나, 홀로 앉아 재물을 가진 것이 전부는 아니라는 뉘앙스을 내포한다. 권세자의 뒤에 걸린 그림은 화려한 초상화임에도 낡고 기울어진 액자에 담겨 언젠가는 끝나는 그들의 호화로운 끝을 담았다. 또한, 배경 가운데에 위치한 찢어진 장막은 그들의 불안함의 끝을 표현하고자 하였다. 이러한 이미지는 한 시대를 휘어 잡았으나 결국 무너진 육적 이스라엘, 즉 초림때의 서기관 바리새인들을 상징한다. 이를 통해 이렇듯 사람들은 많이 가진 것, 보이는 것을 판단하지만 그것이 전부는 아님을 표현하고자 하였다."},
    { id:12, title: "12_사람의 마음(밭에 남은자)", url: "/audio/12.mp3", img: "/images/12.png",description: "마13장의 밭의 이미지를 창공에서 내려다본 시점으로 패턴화 시켜 표현한 작품이다. 캔버스에 담긴 색상과 좌측 하단에서 시작된 불길을 통해 수확이 끝마친 밭임을 알 수 있다. 좋은 상품성을 가진 곡식을 수확한 밭에는 쭉정이, 가라지, 잡초같은 잔사들만 남게 되고 농부는 이것들을 태워 땅의 지력을 높인다. 이와 같은 자연의 이치처럼, 성경의 마13장을 통해서도 말씀의 씨가 사람의 마음 밭에 뿌려 졌음에도 추수 된 자가 있고, 남아 불태워지는 자가 있음을 알 수 있다."},
    { id:13, title: "13_황무지(밭에 남은자)", url: "/audio/13.mp3", img: "/images/13.png",description: "마13장의 추수 후의 황량한 들판을 풍경화로 표현한 작품이다. 성경의 내용을 기반으로 추수가 끝난 풍경을 소재로 인간의 허망함을 표현했다. 추수가 끝나면 곡식은 곳간으로 보내고 남은 가라지는 밭에 두는데 작가는 이것이 인간의 허망감과 비슷하다고 생각했다. 가을인 추수 때를 하루의 저녁무렵으로 표현하였고, 낮게 깔린 먹구름으로 어두운 분위기를 강조했다. 나무가 없이 비어 흙만 남은 민둥산과 빈 논은 황량함을 부각시킨다."},
    { id:14, title: "14_후회", url: "/audio/14.mp3", img: "/images/14.png",description: "왕의 재심처럼 기회가 있었음에도 듣지 않은 자의 후회를 담은 작품이다. 이 작품은 마태복음 13장에서 악인이 잡히어 풀무 불에 빠지며 슬피 울고 이를 갈며 후회하는 내용을 모티브로 장식적인 펜 드로잉 기법으로 제작되었다. 얼굴의 눈 부분에 죽을 사가 새겨진 것은 눈이 멀고 죽은 자로 낙인이 찍힌것이며, 얼굴을 감싸는 검은색 손은 자신의 죄가 자신을 풀무불에 끌어당김을 의미한다. 결국 자신의 행동의 결과로 불 속으로 들어갈 수 밖에 없음을 표현한 것이다. 또한 얼굴 옆면의 검은색 연기의 오브젝트들은 그 사람의 살면서 사랑했던 헛된 세상의 모든 것들로 죽어가며 후회하게되는 모든 것들을 담았다."},
    { id:15, title: "15_Brightness and Darkness", url: "/audio/15.mp3", img: "/images/15.png",description: "화려한 채색과 먹의 단정함으로 빛과 어두움을 강하게 대비시켜 사람의 양면성을 표현한 민화 작품이다.  어두움에 익숙해진 우리는 빛이 밝혀졌음에도 너무 눈이 부셔 어두움으로 더 숨어버린다. 사회에서도 익숙한 것이 아니면 경계하거나 좋지 않은 시선으로 보는게 일반적이다. 빛이 비춰졌음에도 그 빛을 향해 가지 않고 익숙한 어둠 속에서 빛을 등진 사슴의 모습은 성서의 내용 중 빛이 어두움에 비치되 깨닫지 못하였다 함과 같이 빛을 보지 못하는 존재들을 의미한다. 나는 사슴처럼 자신의 편안함과 이익을 추구하는 어둠에 있는 사람은 아닐까?"},
    { id:16, title: "16_빛과 어둠의 제국", url: "/audio/16.mp3", img: "/images/16.png",description: "르네 마그리트의 빛의 제국을 오마주 한 작품이다. 어두운 세계와 그에 속한 레고들이 주변에 있지만, 빛을 가진 하나의 레고 병정만 눈에 띈다. 작가는 성서 요한복음 3장에 기록된 자기 행위가 악하므로 빛보다 어두움을 더 사랑한 것이며 악을 행하는 자는 빛을 미워하여 빛에 오지 않는다는 내용을 작품에 반영하였다. 사람들은 악한 행동을 하면 타인에게서 숨고자 하며 음지로 들어가고 점점 어두워진다. 작가는 작품을 통해 우리에게 질문을 던지고 있다. 당신은 빛을 미워하는가? 좋아하는가? 어두운 세상에서 모두가 맞다고 생각할 때 빛을 낼 수 있는 사람인가?"},
    { id:17, title: "17_사자(使者)", url: "/audio/17.mp3", img: "/images/17.png",description: "성서에 나오는 네 천사장의 모습을 불교회화로 재해석한 작품이다. 작가는 조선시대 왕의 옆에서 함께 심리하는 신하들이 천사장과 비슷하다고 생각하였다. 성서 계시록 6장에는 심판을 돕는 네 천사장의 모습이 나와 있는데 이를 동양의 불교회화로 재해석하여 표현하였다. 불교에 동서남북을 지키는 사천왕의 모습을 착안하고 불교회화 특유의 색감을 반영하여 제작되었다. 성서에 나오는 네 천사장은 심판을 돕는 자들로 각각의 업무가 있고 그에 따라 손에 쥔 도구가 다르다. 또한 이 작품에는 심판받는 대상도 같이 담겨 있어 이를 함께 찾아보는 재미가 있다."},
    { id:18, title: "18_말과 탄 자들", url: "/audio/18.mp3", img: "/images/18.png",description: "신이 대리인을 보내서 심판을 하는 장면이다. 재판할 때는 여러 시각으로 판단해야 함을 내포한 작품이다. 왕이 재판을 시작하러 갈 때의 용맹함을 담고자 출동하는 장면을 표현하였으며, 하나의 입장만으로 편협하게 판단할 것이 아니라 여러 시각과 입장에서 명확히 보아야 함을 전달한다. 말들이 밟고 있는 구름을 요동치는 물처럼 표현하여 작품에 역동감을 더하였고, 각 탄 자가 들고 있는 도구들은 모두 달라 다양성과 다각도라는 의미를 내포하고 있다. 또한 활, 칼, 저울 등을 황금으로 표현하였는데 이는 변하지 않는 가치과 진리를 의미한다."},
    { id:19, title: "19_무너져가는 세계", url: "/audio/19.mp3", img: "/images/19.png",description: "나무와 별, 해와 달의 색이 변해가고 땅이 갈라지는 각각의 요소들이 처참하게 무너지는 심판의 날을 표현하였다. 물과 하늘이 맞닿아 경계를 이루고 중력의 방향과 직각을 이루는 수평선이 더이상 수평선의 역할을 하지 못하고 기울어짐으로써 절대적 관념이 무너지고 불가항력을 마주하는 세계를 형상화한다. '심판'이라는 단어가 허무맹랑하거나 희화화되거나 가볍게 여겨지는 오늘날, 작가는 성서 계시록 6장에 표현된 풍경을 이용하여 미처 알지 못했던 세계와 심판(재심)을 보여주고자 한다."},
    { id:20, title: "20_불은 땅과 바다를 향해", url: "/audio/20.mp3", img: "/images/20.png",description: "불로 사위어지는 땅, 바다를 표현한 추상화이다. 작품의 주제와 분위기는 계 8장의 내용을 모티프로 불과 같은 강한 말들은 사람의 마음 구석구석을 태워 해를 입힐 수 있음을 추상화로 담아냈다. 땅과 바다에 붙이 붙어 전체적인 분위기는 불이 난 풍경화가 되고 나무와 물결은 움직임의 형태는 있지만 큰 형태감을 주지 않도록 하였다. 불은 같은 계열의 색으로 풍성하고 다양하게 담아냈다. "},
    { id:21, title: "21_재난의 풍경", url: "/audio/21.mp3", img: "/images/21.png",description: "이 작품은 언뜻 보면 풍경화 같지만 가까이서 보면 재난의 현장이 담겨 있다. 재난의 현장의 표현은 계시록 8장 8~9절의 나팔이 불릴 때 나타나는 현상에 대한 구절을 참고하여 제작되었다. 계시록에서는 총 7번의 나팔이 불리는데, 이 중 6번은 하나님 앞에 범죄하여 심판받는 자들에 대한 내용이 나와있다. 심판 받는 고통의 장면을 재난이 일어난 흑백의 풍경으로 표현한 작품이다."},
    { id:22, title: "22_땅과 바다를 밟고 선 자", url: "/audio/22.mp3", img: "/images/22.png",description: "성서에 나오는 심판자의 모습을 불교회화로 표현한 작품이다. 하늘에는 천둥이 치고 땅과 바다를 각각 밟고 책을 들고 선 모습이다. 하늘의 천둥은 심판자의 힘과 소리를, 땅과 바다를 밟은 것은 천하를 아우름을 의미하고 들고 선 책은 심판의 기준이 명확함을 나타낸다. 자신의 역할을 다하고 공정한 업무를 수행하기 위해 비장한 표정을 한 얼굴이 인상깊다."},
    { id:23, title: "23_인과응보", url: "/audio/23.mp3", img: "/images/23.png",description: "악인은 언젠간 그 행동에 대해 심판 받는다는 내용을 표현한 작품이다. 계14장은 범죄하여 심판받는 자들을 짓밟힌 들포도로 빗대어 설명하는데, 그 짓밟힌 들포도를 형상화 한 작품이다. 위에서 내려오는 돌은 죽음으로 향하는 인간의 시계와 같아서 점점 내려오면서 악의 행위의 결과로 심판을 받는다는 의미를 담았다. 붉은 색으로 표현된 것은 포도로, 성서에서 기안한 소재이다. 성서에는 들에 있는 포도를 범죄한 자들을 상징하는 매개체로 표현하였는데 이를 작품에 녹여 표현한 것이다. 자신의 행동의 결과로 일어나는 결과는 언젠간 심판의 소재가 된다. 지금 이 그림을 보는 당신은 보이는 악과 보이지 않는 악에서 모두 자유로운가?"},
    { id:24, title: "24_여황", url: "/audio/24.mp3", img: "/images/24.png",description: "여황의 심판받는 모습을 표현한 작품이다. 화려한 여황의 모습을 더 부각시키기 위해 엔틱하고 큰 프레임을 사용하였으며, 화관과 각종 보석은 물론 손에 든 잔 조차 금으로 표현하였다. 그런데 이 여황의 표정은 어떤가? 감옥같은 곳에 갇혀 있으면서도 도도하고 자신은 잘못이 없다는 표정을 짓고 있다. 이러한 모습에서 자신의 잘못을 느끼지 못하는 안하무인과 동시에 어딘가 모를 떳떳함이 느껴진다. 이 여황의 모습은 성서 계시록 17장에 나오는 음녀의 모습과 태도를 모티프로 제작되었는데, 이 여황은 과연 안하무인일까? 떳떳함일까? 이 여황은 과연 쇠창살안에서 나올 수 있을까?"},
    { id:25, title: "25_결혼", url: "/audio/25.mp3", img: "/images/25.png",description: "인간의 욕심은 끝이 있을까라는 고민에서 시작하여 성서 계시록 18장의 결혼장면을 모티프한 작품이다. 어둡고 불타는 산 앞으로 신부가 용과 함께 있고, 주변에는 각종 상징들이 놓여있다. 배경의 불타오르는 산은 탐욕으로 불타는 사람의 마음을 투영했다. 신부와 함께 있는 용은 성서의 내용에서 가져온 것으로 악의 집합체라는 의미를 지닌다. 용은 조선시대 왕의 옷에 새겨질 정도로 고귀하고 힘이 있는 존재인데 이 작품에서는 악의 근원으로 표현하여 경각심을 불러일으키고자 하였다. 또한 이 용은 쇠사슬에 잡혀 있어 악으로 행한 일은 결국 사로잡히고 끝난다는 의미를 담았다."},
    { id:26, title: "26_낙인", url: "/audio/26.mp3", img: "/images/26.png",description: "계21장에 기록된 두려워하는 자, 믿지 아니하는자, 흉악자, 살인자, 행음자, 술객, 우상 숭배자, 거짓말 하는 자들이 지옥으로 떨어지는 모습이다. 무거운 죄를 지고 지옥으로 미끌어지듯 추락하는 모습을 천에 파스텔을 사용하여 그라데이션을 주어 표현하였다."},
    { id:27, title: "27_하늘에서 불이 내린다면", url: "/audio/27.mp3", img: "/images/27.png",description: "하늘에서 불이 내린다면? 신이 내리는 재난은 다양하게 표현되지만 그 중에서도 자주 보이는 것은 불로 인한 재난이다. 이 작품은 불이 내리는 장면과 이를 피하기 위한 사람들의 모습이 담겨있다. 나는 과연 하늘에서 불이 내리면 긴박하게 도망치는 사람들의 모습일까 아니면 이것을 지켜보는 작가의 시점일까? 하늘에서 불이 내린다면 피할 수 있을까? 아니 그 전에 불을 사용한 재난을 왜 내리려는 것일까? 성서에는 여러 번의 기회를 주었고, 나오라 했음에도(계18:4) 말을 듣지않자 재난을 내린다고 표현되어 있다. 나는 재난에서 구하기 위한 신의 목소리를 들을 수 있을까?"},
    { id:28, title: "28_용의구금", url: "/audio/28.mp3", img: "/images/28.png",description: "철장 안에 갇힌 용의 모습이 다소 억울하기도 지친 것 같이 보인다. 용의 모습은 뿔과 온 몸이 여러 색으로 화려하고 발톱까지 용맹해 보이지만, 온 몸이 쇠사슬로 감기고, 철장에 갇힌 모습이다. 이는 왕과 대운을 상징하던 용도 언젠간 갇히고 어려움에 처할 수 있음을 내포하고 있다. 작가는 권력의 상징인 용의 구금을 통해 혹시 자신이 생각하고 있는 권력과 현실의 가치도 결국 쓸모 없게 될 수 있으니 경각심을 가지자는 메시지를 주고있다."},
    { id:29, title: "29_심리하다", url: "/audio/29.mp3", img: "/images/29.png",description: "계20장의 책을 펴놓고 심판하는 장면을 전통적인 민화로 표현 한 작품이다. 성경에서는 어느 한 날에 하나님 앞에 모두 동일한 입장으로 펴놓인 책을 기준으로 심판받을 것을 알려주고 있다. 선과 악, 천국과 지옥을 나누는 기준은 무엇이며, 신은 왜 심판을 하려는 것일까? 펴놓인 책을 기준으로 심판하는 자들 앞으로 심판을 기다리는 많은 사람들의 모습과, 그 결과에 따라 천국과 지옥의 두갈래로 나눠지는 사람들의 모습이 담겨져 있다. 천국과 지옥의 풍경, 지옥으로 끌려가는 자들, 천국으로 가며 기뻐하는 자들… 한 화면에 다양한 모습과 장면을 보여주고 있다. 마지막 때에 우리는 과연 어느 입장에 있게 될 것인가?"},
    { id:30, title: "30_어둠, 빛1, 빛2", url: "/audio/30.mp3", img: "/images/30.png",description: "창1장의 재창조의 노정을 추상적으로 표현한 작품이다. 흑암하고 공허했던 어두움 가운데 빛이 나타나고 그 빛으로 어두움이 점점 사라지는 장면을 강렬한 색감을 중첩적으로 사용하여 추상적으로 나타낸 작품이다."},
    { id:31, title: "31_우리는 어디에서 와서 어디로 가는가? 우리는 누구인가?", url: "/audio/31.mp3", img: "/images/31.png",description: "창1장의 재창조를 담아낸 펜드로잉 작품이다. 창1장의 빛과 어둠이 나뉘는 것 처럼, 가운데 선을 기준으로 상단은 하나님의 세계를, 하단은 사단이 함께하여 죽음로 가는 세계를 대조적으로 표현했다."},
    { id:32, title: "32_三山", url: "/audio/32.mp3", img: "/images/32.png",description: "성서에 등장하는 세가지 산(배도, 멸망, 구원)의 산을 표현한 작품이다. 풍요로운 산과 불타는 산, 그리고 불탄 후 재만 남은 산의 모습이 강한 대조를 이룬다."},
    { id:33, title: "33_신의 선물", url: "/audio/33.mp3", img: "/images/33.png",description: "성서에 기록된 복을 장식적인 부조로 제작한 작품이다. 성서에서는 행동의 결과로 12개의 복을 준다고 기록되어 있다."},
    { id:34, title: "34_화염", url: "/audio/34.mp3", img: "/images/34.png",description: "성서에 나오는 불, 유황, 자줏빛, 불과 연기, 유황의 색감을 천에 염색하여 표현한 작품이다. 강한 색감대비를 통해 불이 주는 강한 이미지와 생동감을 느끼게 한다."},
    { id:35, title: "35_군상", url: "/audio/35.mp3", img: "/images/35.png",description: "로댕의 지옥의 문을 모티프로 제작한 군상이다. 삶에 대한 심판의 결과는 악한 행위에 대한 심판이지만, 각자의 심정과 사연이 있을 수 있다고 생각했다. 이러한 내용을 핸드빌딩 기법을 이용하여 표정과 몸짓으로 표현하였다. 또한 흑토를 사용하여 그들의 검은 죄를 어둡게 표현하였다."},
  ]);

  return (
    <div className="container mt-4" style={{backgroundImage:"/images/bg.png", backgroundSize:"100%"}}>
      {/* <h2 className="text-center mb-4">Available Audios</h2> */}
      <AudioList audios={audios} />
    </div>
  );
}

export default Home;
