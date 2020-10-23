# DADA
## Daily Auto Diary Application

### 사진의 메타데이터를 이용한 자동 피드 작성 서비스

​	

## Target User
- 다이어리 쓰기 귀찮은 사람

- 편리하게 다이어리 쓰고 싶은 사람

- 매일매일 오늘 있었던 일을 정리해보고 싶은데 귀찮은 사람

- 어디를 가거나 무언가를 할 때, 사진을 자주 찍어놨는데 나중에 이 때 느낌이 기억이 안나서 정리해두고 싶은 사람

  

##  기능적 요구사항
### 핵심 기능

![흐름](/uploads/b238fac2c5997e41daa4a67b30fc020c/흐름.JPG)

1. 피드 만들어 주기
    1. 내부 조건에 맞는 사진들을 모아 가 피드 생성
       1. 메타데이터 => 게시글 나누기 (관련 있는 사진들끼리 한 게시글로 묶어준다.)
       2. 사용자에게 검토 요청 => 피드 합치기 / 나누기

2. 피드 만들기 (Manual하게)
    1. 선택한 사진들을 업로드
    2. AI로 사물 분석 => 태그

3. 다양한 뷰
    1. 피드
    2. 캘린더 (추가기능) - 올라간 게시글 정보 달 단위로 확인할 수 있게 띄워주기
    3. 태그 검색

4. 매일 특정 시간 (혹은 변동 사항이 있을 때) 푸쉬 알림으로 검토 요청

5. 로그인 - 카카오 로그인

### 부가 기능 (예정)
1. 만들어진 게시글 외부 SNS (인스타그램..)로 포팅하기
2. 지도에 핀으로 위치별 사진 모음
3. 월별로 쓴 일기 모아주기
4. 특정 일기 좋아요
5. 깃헙 잔디 심듯이 월별 '참 잘했어요' 도장 보여주기

### 비기능적 요구사항
- 무결성, 완전성
  - 모든 작업은 무결성 완전성이 보장되어야 한다.

### 역할분담
- 기본적으로 아래와 같이 분담하나, 함께 개발한 예정
  - FrontEnd - 종관, 민규
  - BackEnd - 기훈, 현민, 혜진

### 기술 스택
- React Native (앱)
- Spring Boot 
- MongoDB
- Docker, Jenkins, EC2, AWS Rekonition
- Notion, Jira, Gitlab

## Service Details

![플로우](/uploads/80db7ef07e9310a86cf6ed2a9d923ed7/플로우.JPG)

- 어플 설치 전 사진들은 서비스 대상에게 우선 제외(이를 '이전 사진'으로 명)
  - 이전 사진들 중 피드생성하고 싶은 내용은 선택하여 업로드

- 어플 설치 후 새로 추가된 사진에만, 디폴트 서비스 적용

- 가 피드 생성
  - 당일 추가된 사진들만 분류
  - 위치 정보가 없는 사진은 포함 X
  - 유사도가 높은 사진은 한 장만 선택

- 매뉴얼 피드 생성 시 -> 장소, 시간별 분류로 선택해서 사진 선택하여 피드 생성

1. 어플 첫 실행
   1. 개인정보제공도의 및 갤러리 접근 동의
   2. 사진에 위치 정보가 있어야 서비스가 제공된다고 안내

2. 피드 만들기
    1. 가피드 생성 (사진 1차 분류 By 메타데이터)   
    2. 모의 피드 검토 (피드 = 분류된 사진들 분리 or 합치기) 요청  
       like 이렇게 분류했는데 괜찮으신가요? 검토 부탁드립니다!  
    3. 사용자에게 OK 받으면 실제 피드 생성  

3. 피드 조회하기
   1. 다양한 뷰로 게시글 확인 가능
    1. 피드 (인스타그램st)
    2. 캘린더 (각 날짜에 대표 사진 or 장소 넣어주기)

4. 어플 구동 후 접근 or 위치 서비스 off 하면, 다시 켤 때까지 블라인드

5. 매일 특정 시간 (혹은 변동 사항이 있을 때) 푸쉬 알림으로 검토 요청

6. 사진마다 comment 달 수 있고, 피드에도 comment 달 수 있음

7. 검색시 태그(#)를 기준으로 검색하고 결과로 일치하는 태그(#)가 붙은 사진을 노출,  
   사진 선택 시 사진 디테일 페이지로 이동하고 상단에 노출되어있는 날짜를 선택하면 해당 사진이 포함되어 있는 피드로 이동.