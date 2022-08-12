<h1>Michelin_Seoul</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/36911316/117452900-4481d980-af7f-11eb-81c5-f43f44bb5af5.png">  
</p>
<p align="center">
  <span><img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white"></span>
  <span><img src="https://img.shields.io/badge/-Redux--Saga-brightgreen?logo=redux-saga"></span>
  <span><img src="https://img.shields.io/badge/-Mysql-blue?logo=mysql&logoColor=black"></span>
  <span><img src="https://img.shields.io/badge/-Express-gray?logo=javascript&logoColor=white"></span>
</p>



  https://michelinseoul.xyz<br> 해당 사이트에서 데모사이트로 이동할수 있습니다.

  <h2>:memo: Michelin_Seoul 서비스 소개</h2>
  <h3>서울 미슐랭 1~3스타 레스토랑 소개 사이트 입니다.</h3>
  <h3>🔍 검색기능</h3>
  <blockquote>
    <ul>
      <li>해쉬태크 기준 검색제공</li>
    </ul>
  </blockquote>
  <h3>:stew: 음식 테마별 레스토랑 소개</h3>
  
  <h3>:fork_and_knife: 레스토랑 디테일</h3>
  
  <h2>⚙️ 설치방법</h2>
  <blockquote>
    <ul>
      <li><h4>1. 기본설정</h4></li>
      <blockquote>
        <li>1-1. 설치하고자 하는 컴퓨터에 git, node, mysql이 설치되어 있어야 합니다.</li>
        <li>1-2. 터미널에서 설치하고자 하는 폴더에  git clone https://github.com/dongbae129/Michelin_Seoul.git 입력.</li>
        <li>1-3. back, fornt 폴더에서 각각 터미널에 npm i 명령어로 모듈 설치(front는 설치시간이 꽤 걸립니다).</li>
      </blockquote>
      <li><h4>2. back폴더 설정</h4></li>
      <blockquote>
        <ul>          
          <li>2-2. cmd에서 mysql -u root -p 를 입력하여 mysql 접속</li>
          <li>2-3. create database foodrecommend; 를 입력하여 해당이름의 DB생성</li>
          <li>2-4. uploads폴더 생성(사진보관 폴더)</li>
          <li>2-5. 터미널에 npm run dev 를 입력하여 서버구동 확인. (자세한 script는 package.json 참고)</li>
        </ul>
      </blockquote>
      <li><h4>3. front폴더 설정</h4></li>
      <blockquote>
        <ul>
          <li>3-1. 서버와 통신하는 주소를 서버주소로 변경해주세요. ex)localhost:8010(back-server 주소:포트)</li>
        </ul>
      </blockquote>
    </ul>
  </blockquote>
  <h2>:pushpin: 주요기능</h2>
  <table>
    <thead>
      <tr>
        <th>메인페이지</th>
        <th>식당 업로드</th>
        <th>테마별 식당 모음</th>
        <th>식당 디테일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          
![K-005](https://user-images.githubusercontent.com/36911316/113401509-6adfb280-93de-11eb-86ee-98872c10ea2d.png)
        </td>
        <td>

![K-009](https://user-images.githubusercontent.com/36911316/113401979-46380a80-93df-11eb-942b-083e77179b69.png)
</td>
        <td>

![K-007](https://user-images.githubusercontent.com/36911316/113401692-c14cf100-93de-11eb-8a06-981c4f48821b.png)
</td>
        <td>

![K-008](https://user-images.githubusercontent.com/36911316/113401885-1852c600-93df-11eb-9461-d9e2020418f9.png)

</td>
      </tr>
    </tbody>
  </table>

<h2>:pushpin: 프로세스 흐름</h2>

![process](https://user-images.githubusercontent.com/36911316/117455132-d7237800-af81-11eb-9b95-1eabc85d4435.png)
