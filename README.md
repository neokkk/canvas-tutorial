# 개요

js13k 2022를 준비하기 위해 canvas 사용법을 익히는 레포입니다.

## 사용법
\<canvas> 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 렌더링 컨텍스트를 노출해 컨텐츠를 생성하고 다룬다.
`getContext` 메서드를 사용해 렌더링 컨텍스트에 접근하고 그리기 함수들을 사용할 수 있다.
좌측 상단의 (0, 0) 좌표가 원점이며, 이를 기준으로 그리드가 형성된다. 별도의 크기를 설정하지 않으면 기본 크기는 300 * 150의 영역을 가진다.

### 직사각형 그리기

* fillRect(x, y, width, height)<br>
  칠하기
* strokeRect(x, y, width, height)<br>
  윤곽선 그리기
* clearRect(x, y, width, height)<br>
  특정 부분 지우기

### 경로 그리기
경로는 점의 집합이며, 선의 한 부분이 연결돼 곡선, 도형을 형성하고 두께와 색을 나타낸다.
경로나 하위 경로는 닫힐 수 있다.
경로를 생성하고 그리기 명령어를 이용해 구성한다. 경로가 생성되면 윤곽선을 그리거나 도형 내부를 채울 수 있다.

* beginPath<br>
  새로운 경로 만들기<br>
  이 메소드가 호출될 때마다 하위 경로의 모음은 초기화 된다.<br>
  첫 경로 생성 명령은 실제 동작에 상관 없이 `moveTo`로 여겨진다. 그렇기 때문에 경로를 초기화 한 직후에는 시작점 위치를 명확하게 설정하는 것이 좋다.
* closePath<br>
  하위 경로의 시작 부분과 연결된 직선 추가하기<br>
  열린 도형을 닫는다.<br>
  이미 도형이 닫혔거나 한 점만 존재하는 경우 아무 것도 이뤄지지 않는다.
* stroke<br>
  윤곽선으로 도형 그리기
* rect(x, y, width, height)<br>
  직사각형 추가하기<br>
  자동으로 moveTo 함수가 호출된다.
* arc(x, y, radius, startAngle, endAngle, counterclockwise?)<br>
  곡선 그리기<br>
  각도는 [호도법](https://mathbang.net/496)을 이용한다.
* fill<br>
  경로의 내부를 채우기<br>
  열린 도형은 자동으로 닫힌다.
* clip<br>
  특정 경로 잘라내기
  열린 도형은 자동으로 닫힌다.
* moveTo(x, y)<br>
  펜 이동하기<br>
* lineTo(x, y)<br>
  하위 경로와 선 잇기<br>
  시작점은 직전에 그려진 경로에 의해 결정된다.
* arcTo(x1, y1, x2, y2, radius)<br>
  하위 경로와 곡선 잇기<br>
  주어진 제어점들과 반지름으로 호를 그리고 하위 경로와 직선으로 연결한다.
* quadraticCurveTo(cp1x, cp1y, x, y)<br>
  2차 베지어 곡선 그리기<br>
  cp1x, cp1y 제어점을 사용해 하위 경로에서 x, y까지의 이차 베지어 곡선을 그린다.
* bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)<br>
  3차 베지어 곡선 그리기<br>
  cp1x, cp1y, cp2x, cp2y 제어점을 사용해 하위 경로에서 x, y까지의 삼차 베지어 곡선을 그린다.
* fillStyle<br>
  영역 색 채우기
* strokeStyle<br>
  선 색 채우기
* fillText(text, x, y, maxWidth?)<br>
  텍스트 채우기
* strokeText(text, x, y, maxWidth?)<br>
  텍스트 선 그리기
* drawImage(image, x, y, width?, height?)<br>
  이미지 그리기
* save<br>
  canvas 상태 저장하기<br>
  메서드가 호출될 때마다 stack에 저장된다.
* restore<br>
  저장한 최근 상태 불러오기<br>
  한 번 상태가 불러와지면 해당 상태는 stack에서 사라진다.
* translate(x, y)<br>
  다른 점으로 이동시키기
* rotate(angle)<br>
  회전시키기
* scale(x, y)<br>
  수평으로 x만큼, 수직으로 y만큼 크기 확대/축소하기
* transform(a, b, c, d, e, f)<br>
  변형시키기<br>
  a: 수평으로 확대/축소하기<br>
  b: 수평으로 비스듬히 기울이기<br>
  c: 수직으로 비스듬히 기울이기<br>
  d: 수직으로 확대/축소하기<br>
  e: 수평으로 이동하기<br>
  f: 수직으로 이동하기


### 주의할 점

* IE9 이하나 텍스트 기반 등의 캔버스를 지원하지 않는 오래된 브라우저를 위한 대체 컨텐츠를 제공해야 한다.
  * canvas 태그 내부에 대체 컨텐츠를 삽입한다.
* 대체 컨텐츠를 삽입할 수 있는 까닭에, 닫는 태그(</canvas>)가 꼭 필요하다.
* 캔버스 지원 여부는 아래와 같은 코드를 삽입해 확인할 수 있다.
```js
if (canvas.getContext) {
  // ...
}
```

### 에러 리포트

* webpack.config 작성 시 resolve.extensions 요소에 `.` 빼먹지 않기

## 레퍼런스

* [MDN Canvas API Tutorial](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial)
* [Canvas Size](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=ads226&logNo=220566989379)
* [Bezier Curve](https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%A7%80%EC%97%90_%EA%B3%A1%EC%84%A0)
* [Bezier Curve Principle](https://blog.coderifleman.com/2016/12/30/bezier-curves/)
