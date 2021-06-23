# Pharmacy System APIs

## User

#### 1.Register 

```js
request:

METHOD: `POST`  
URL:`/api/users/register`  
DATA:user:{
    name:String,
    email:String,
    password:String,
    pwdConfirm:String,
    identity:5
}

response:

SUCCESS:{
    code:Number,
    msg:String,
    // data:Object
}

FAIL:{
    errorCode:Number,
    errorMsg:String,

}
```

#### 2.Login

```js
request:

METHOD:`POST`
URL:`/api/users/login`
DATA:user:{
    name/email:String,
    password:String,
}

response:

SUCCESS:{
    code:Number,
    msg:String,
    access_token:String,
    refresh_token:String
}

FAIL:{
    errorCode:Number,
    errorMsg:String
}
```

#### 3.GetUserProfile

```js
request:

METHOD:`GET`
URL:`/api/user`
HEADER:{
    Authorization:`Bearer ${access_token}`
}

response:

SUCCESS:{
    code:Number,
    msg:String,
    user:{
        user_name:String,
        user_avatar:String,
        user_province:String || null,
        user_city:String || null,
        user_area:String || null,
        user_addeDetail:String || null
        user_identity:String,
        user_phone:String like'135****4845'||null,
        user_email:String
    }
}

FAIL:{
    errorCode:Number,
    errorMsg:String
}

```

#### 4.GetUserStatus

```js
request:

METHOD:`GET`
URL:`/api/user/status`
HEADER:{
    Authorization:`Bearer ${access_token}`
}

response:

SUCCESS:{
    code:Number,
    msg:String,
    userStatus:Number,
    userStatusMsg:String
}

FAIL:{
    errorCode:Number,
    errorMsg:String
}
```



#### 5.AddressModify

```js
request:

METHOD:`PUT`
URL:`/api/user/address`
HEADER:{
    Authorization:`Bearer ${access_token}`
}
DATA:address:{
    province:String,
    city:String,
    area:String
}

response:

SUCCESS:{
    code:Number,
    msg:String,
    user:{
        user_name:String,
        user_province:String,
        user_city:String,
        user_area:String
        user_addr_detail:String
    }
}

FAIL:{
    errorCode:Number,
    errorMsg:String
}
```

#### 6.PhoneNumModify

```js
request:

METHOD:`PUT`
URL:`/api/user/phonenum`
HEADER:{
    Authorization:`Bearer ${access_token}`
}
DATA:phone:{
    phonenum:Number
}

response:
SUCCESS:{
    code:Number,
    msg:String,
}

FAIL:{
    errorCode:Number,
    errorMsg:String
}
```

#### 7.EmailModify

```js
request:

METHOD:`PUT`
URL:`/api/user/email`
HEADER:{
    Authorization:`Bearer ${access_token}`
}
DATA:email:{
    email:String
}

response:
SUCCESS:{
    code:Number,
    msg:String,
}

FAIL:{
    errorCode:Number,
    errorMsg:String
}
```

#### 8.PasswordModify

```js
request:

METHOD:`PUT`
URL:`/api/user/password`
HEADER:{
    Authorization:`Bearer ${access_token}`
}
DATA:password:{
    password:String,
    newPassword:String,
    newPwdConfirm:String
}

response:
SUCCESS:{
    code:Number,
    msg:String,
}

FAIL:{
    errorCode:Number,
    errorMsg:String
}
```
