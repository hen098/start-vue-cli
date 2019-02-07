# 데이터 단계

### 데이터 처리 기준
* 가급적 computed 필드에 정의하여 사용한다.
	* 디자인 단계에서만 data 필드에 정의하고 나중에 computed 필드로 옮겨 놓는다.
* .vue 파일에서만 사용되고 다른 싱글 컴포넌트에서 사용되지 않는다면 data 필드에 정의해도 된다.
* 여러 싱글 파일 컴포넌트(*.vue)에서 공유되어야 한다면 vuex의 store에 정의하여 사용한다. 
* 서버에 데이터가 있다면 store에 정의하여 사용한다.

### modules 세트
```javascript js
const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
```

### action
동기 함수
서버와 연관된 처리, 사용자 입력과 연관되면 액션

### mutation
비동기 함수 
단순 변수 값 설정
<!--stackedit_data:
eyJoaXN0b3J5IjpbODA4OTM2MzBdfQ==
-->