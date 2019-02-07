## 개발 순서 
**1. 웹 화면 구성 단계 - 디자인 단계** 

2. 데이터 및 로직 구성 단계 - 데이터 단계
3. API 연결 단계 - API 단계

# 디자인 단계
디자인 단계에서는 어떻게 보여지는지가 중요하다. 
실제 동작하듯이 보이는 가상의 데이터를 vue 컴포넌트 data 속성을 이용한다. 
computed 같은 것 마저도 배제하고 오직 data와 `<template>`부분만 수정한다.

### data 프로퍼티 정의와 `<template>`
* 화면구성
* data 필드 정의
	* 뷰 컴포넌트에는 화면 구성만
	* 비즈니스 로직이나 제어 로직은 가급적 배제
* 테스팅 > 화면 구성이 제대로 되었는가 주력
* 싱글 컴포넌트 (*.vue) 에 ajax 나 기타 등등 포함하면 디버깅도 어렵고, 잦은 화면 수정에 어려움

## Vutify 

### `<v-container>`
반응형과 그리드 구성이 가능하려면 해당 태그로 감싸야한다.
* fluid : v-container를 사용하는 부모 폭을 다 사용함 (width=100%)
	* fluid를 주지않으면, 내부 컴포넌트 최대 크기가 컨테이너의 최대 크기
* fill-height : 브라우저 윈도우 높이를 모두 사용
* ma-0 : margin all 0
* pa-0 : padding all 0
  > https://vuetifyjs.com/ko/framework/spacing

### `<v-parallax>`
이미지를 화면에 표출하기 위한 것 
매터리얼 디자인의 parallax 구현
* dark : 어두운 테마 색 사용
* height : 이미지 높이를 지정된 크기로 맞춤
* src : 이미지 지정

### `<v-layout>` 
내부 컴포넌트들을 정렬하기 위한 레이아웃 컴포넌트 
주로 v-flex와 조합되어 사용된다.
* align-center : 수직의 가운데 배치 
* justify-center: 수평의 가운데 배치
* column : 수직으로 나열 

### `<v-list>`
* two-line : 하나의 아이템이 두 줄로 구성되어 표현된다
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIzODg0OTY1OSwtMTk3OTAwNzI1Myw0Nj
Q0NjQxMjUsLTc1ODI4NTM5OSw1OTI2NjAyNDMsLTgyNTc1NjEy
NSw0NTAyNjUyMTFdfQ==
-->