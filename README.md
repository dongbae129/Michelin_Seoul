About Michelin_2020_renwer.


* 설치방법

//먼저 git,node,mysql이 설치되어 있어야 한다.

1.설치하고자 하는 폴더위치에 git clone https://github.com/dongbae129/Michelin_2020_renwer.git

2.git clone 후 back,front 폴더에서 각각 터미널에서 npm i 명령어를 입력한다.(모듈 설치하는데 시간이 꽤 걸립니다)

3.back폴더로 이동하여 .env파일을 생성하여 아래의 내용을 작성한다.

DB_PASSWORD=mysql 비밀번호를 작성한다.

ex)DB_PASSWORD=123456

4. 터미널에서 mysql에 접속 후 create database foodrecommend;를 입력하여 해당이름의 데이터베이스를 생성한다.

5. back폴더에서는 npm run dev, front폴더에서는 npm stat로 웹사이트를 실행할수 있다.(자세한 script는 package.json참고)

※p.s front 폴더에서 서버통신하는 코드에서 주소를 localhost로 변경하길 바랍니다.



*프로젝트 소개

제목 : 별들의 여행.

소개 : 2020년 대한민국/서울 미슐랭 가이드 기준 1~3스타를 받은 식당 소개 사이트.

기능 : 검색, 등록, 조회.

사용기술 : React, Redux, Mysql, Node.


