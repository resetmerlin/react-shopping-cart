<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/3e6c6f30b11d4b098b5a3e81be19ce3a" width="400">
</p>
<h2 align="middle">shopping basket
</h2>
<p align="middle">React & Redux Desktop shopping basket
 application</p>
</p>

## 🚀 Getting Started

> Composes a large number of components into pages and manages complexity.

✔ Implement the ️ 'Desktop Target' web app and think about the 'UI/UX considering revisiting' without interruption leading to purchases.
✔ Use 'Redux' based on 'Flux Architecture' for ️ status management.
✔ Consider switching multiple pages using the ️ 'Router'.
✔ Refer to the ️ [Baemin Chamber of Commerce](https://mart.baemin.com) Service

<br />

## 🕋 How to run the Server

- At first run

```shell
# npm
cd server

npm install

npm run server

```

- On subsequent runs

```shell
# npm
npm run server

```

## 🕋 How to run the Client

- At first run

```shell
# npm
cd client

npm install

npm run dev

```

- On subsequent runs

```shell
# npm
npm run dev

```

<br />

## 📝 API Specification

### 🌏 baseUrl

```
http://localhost:3003
```

### 🎁 Product

#### Product List Inquiry

| method | uri       |
| ------ | --------- |
| GET    | /products |

```json
{
  "response": [
    {
      "id": 1,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 2,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    }
  ]
}
```

#### Add a product

| method | uri       |
| ------ | --------- |
| POST   | /products |

```json
{
  "requestBody": {
    "products": {
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    }
  }
}
```

#### Product Single Inquiry

| method | uri            |
| ------ | -------------- |
| GET    | /products/{id} |

```json
{
  "response": {
    "id": 1,
    "price": 10000,
    "name": "치킨",
    "imageUrl": "http://example.com/chicken.jpg"
  }
}
```

#### Product Single Delete

| method | uri            |
| ------ | -------------- |
| DELETE | /products/{id} |

```json
{
  "response": {}
}
```

### 🛒 Shopping basket

#### Check shopping basket item list

| method | uri    |
| ------ | ------ |
| GET    | /carts |

```json
{
  "response": {
    "id": 1,
	  "product": {
			"name": "test",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 1
		},
	},
	{
    "id": 5,
		"product": {
			"name": "tes11111t",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 10
		}
	},
}
```

#### Add shopping basket items

| method | uri    |
| ------ | ------ |
| POST   | /carts |

```json
{
  "requestBody": {
    "product": {
      "id": 10,
      "name": "tes11111t",
      "price": 1234,
      "imageUrl": "test.com"
    }
  }
}
```

#### Single Delete Shopping Basket Item

| method | uri             |
| ------ | --------------- |
| DELETE | /carts/{cartId} |

```json
{
  "response": {}
}
```

### 🗒 Order

#### Add Order (to place an order)

| method | uri     |
| ------ | ------- |
| POST   | /orders |

```json
{
  "requestBody": {
    "orderDetails": [
      {
        "id": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg",
        "quantity": 5
      },
      {
        "id": 2,
        "price": 20000,
        "name": "피자",
        "imageUrl": "http://example.com/pizza.jpg",
        "quantity": 3
      }
    ]
  }
}
```

#### Order list (details) inquiry

| method | uri     |
| ------ | ------- |
| GET    | /orders |

```json

{
  "response": [
    {
      "id": 1,
      "orderDetails": [
        {
          "id": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "id": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    },
    {
      "id": 2,
      "orderDetails": [
        {
          "id": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "id": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    }
  ]
```

#### Order Single Lookup

| method | uri          |
| ------ | ------------ |
| GET    | /orders/{id} |

```json
{
  "response": {
    "id": 1,
    "orderDetails": [
      {
        "id": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg",
        "quantity": 5
      },
      {
        "id": 2,
        "price": 20000,
        "name": "피자",
        "imageUrl": "http://example.com/pizza.jpg",
        "quantity": 3
      }
    ]
  }
}
```

---

<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/3e6c6f30b11d4b098b5a3e81be19ce3a" width="400">
</p>
<h2 align="middle">장바구니</h2>
<p align="middle">React & Redux 데스크탑 장바구니 애플리케이션</p>
</p>

## 🚀 Getting Started

> 다수의 컴포넌트를 페이지로 구성하고 복잡해진 상태를 관리합니다.

✔️ `데스크탑 타겟`의 웹 앱을 구현하며 구매로 이어지는 것에 끊김이 없고 `재방문을 고려한 UI/UX`에 대해 고민해봅니다.  
✔️ 상태 관리를 위해 `Flux Architecture` 기반의 `Redux`를 활용합니다.  
✔️ `Router`를 활용해 여러 페이지 전환을 고려합니다.  
✔️ [배민상회](https://mart.baemin.com) 서비스 참고

<br />

## 🕋 Server 실행 방법

> **react-shopping-cart/client** 디렉토리에서 실행해주세요.

- 최초 실행 시

```shell
# npm
npm run server:first

# yarn
yarn server:first
```

- 이후 실행 시

```shell
# npm
npm run server

# yarn
yarn server
```

<br />

## 📝 API 명세

### 🌏 baseUrl

```
http://localhost:3003
```

### 🎁 상품

#### 상품 목록 조회

| method | uri       |
| ------ | --------- |
| GET    | /products |

```json
{
  "response": [
    {
      "id": 1,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 2,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    }
  ]
}
```

#### 상품 추가

| method | uri       |
| ------ | --------- |
| POST   | /products |

```json
{
  "requestBody": {
    "products": {
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    }
  }
}
```

#### 상품 단일 조회

| method | uri            |
| ------ | -------------- |
| GET    | /products/{id} |

```json
{
  "response": {
    "id": 1,
    "price": 10000,
    "name": "치킨",
    "imageUrl": "http://example.com/chicken.jpg"
  }
}
```

#### 상품 단일 삭제

| method | uri            |
| ------ | -------------- |
| DELETE | /products/{id} |

```json
{
  "response": {}
}
```

### 🛒 장바구니

#### 장바구니 아이템 목록 조회

| method | uri    |
| ------ | ------ |
| GET    | /carts |

```json
{
  "response": {
    "id": 1,
	  "product": {
			"name": "test",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 1
		},
	},
	{
    "id": 5,
		"product": {
			"name": "tes11111t",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 10
		}
	},
}
```

#### 장바구니 아이템 추가

| method | uri    |
| ------ | ------ |
| POST   | /carts |

```json
{
  "requestBody": {
    "product": {
      "id": 10,
      "name": "tes11111t",
      "price": 1234,
      "imageUrl": "test.com"
    }
  }
}
```

#### 장바구니 아이템 단일 삭제

| method | uri             |
| ------ | --------------- |
| DELETE | /carts/{cartId} |

```json
{
  "response": {}
}
```

### 🗒 주문

#### 주문 추가(주문하기)

| method | uri     |
| ------ | ------- |
| POST   | /orders |

```json
{
  "requestBody": {
    "orderDetails": [
      {
        "id": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg",
        "quantity": 5
      },
      {
        "id": 2,
        "price": 20000,
        "name": "피자",
        "imageUrl": "http://example.com/pizza.jpg",
        "quantity": 3
      }
    ]
  }
}
```

#### 주문 목록(내역) 조회

| method | uri     |
| ------ | ------- |
| GET    | /orders |

```json

{
  "response": [
    {
      "id": 1,
      "orderDetails": [
        {
          "id": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "id": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    },
    {
      "id": 2,
      "orderDetails": [
        {
          "id": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg",
          "quantity": 5
        },
        {
          "id": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg",
          "quantity": 3
        }
      ]
    }
  ]
```

#### 주문 단일 조회

| method | uri          |
| ------ | ------------ |
| GET    | /orders/{id} |

```json
{
  "response": {
    "id": 1,
    "orderDetails": [
      {
        "id": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg",
        "quantity": 5
      },
      {
        "id": 2,
        "price": 20000,
        "name": "피자",
        "imageUrl": "http://example.com/pizza.jpg",
        "quantity": 3
      }
    ]
  }
}
```
