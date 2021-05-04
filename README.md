About Michelin_2020_renwer.

https://baeportfolio.xyz/#moveproject
해당 사이트에서 데모사이트로 이동할수 있습니다.

-설치방법-

//먼저 git,node,mysql이 설치되어 있어야 한다.

1.설치하고자 하는 폴더위치에 git clone https://github.com/dongbae129/Michelin_2020_renwer.git

2.git clone 후 back,front 폴더에서 각각 터미널에서 npm i 명령어를 입력한다.(모듈 설치하는데 시간이 꽤 걸립니다)

3.back폴더로 이동하여 .env파일을 생성하여 아래의 내용을 작성한다.

DB_PASSWORD=mysql 비밀번호를 작성한다.
ex)DB_PASSWORD=123456


4. 터미널에서 mysql에 접속 후 create database foodrecommend;를 입력하여 해당이름의 데이터베이스를 생성한다.

5. back폴더에서는 npm run dev, front폴더에서는 npm stat로 웹사이트를 실행할수 있다.(자세한 script는 package.json참고)

※p.s front 폴더에서 서버통신하는 코드에서 주소를 localhost로 변경하길 바랍니다.



-프로젝트 소개-


제목 : 별들의 여행.

소개 : 2020년 대한민국/서울 미슐랭 가이드 기준 1~3스타를 받은 식당 소개 사이트.

기능 : 검색, 등록, 조회.

사용기술 : React, Redux, Mysql, Node.



![K-005](https://user-images.githubusercontent.com/36911316/113401509-6adfb280-93de-11eb-86ee-98872c10ea2d.png)
-main페이지 이며, 상단에서 원하는 키워드로 검색을 할수있으며 5가지 음식타입중에 선택하여 들어갈수 있다-




![K-007](https://user-images.githubusercontent.com/36911316/113401692-c14cf100-93de-11eb-8a06-981c4f48821b.png)
-main에서 검색 또는 클릭으로 들어올시 해당 타입에 대한 식당을 찾을수 있으며 해당 검정별에 마우스를 올리면 대표사진,이름,해쉬태그 정보를 확인할수 있다-




![K-008](https://user-images.githubusercontent.com/36911316/113401885-1852c600-93df-11eb-9461-d9e2020418f9.png)
-식당 상세정보 페이지이다. 이미지 슬라이드와 해당 식당의 상세 정보를 확인할수 있다-




![K-009](https://user-images.githubusercontent.com/36911316/113401979-46380a80-93df-11eb-942b-083e77179b69.png)
-식당을 이미지와 같이 등록할수 있다-



