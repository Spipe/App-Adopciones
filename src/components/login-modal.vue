<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="440"
      height="440"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

        <v-card>
            <div class="login-modal">
                <div class="body cf">
                    <v-btn block round depressed class="white--text" color="#3b5998" dark>
                        <v-icon left dark>fab fa-facebook-f</v-icon>
                        Inciar con Facebook
                    </v-btn>

                    <p class="or-divider"><span>OR</span></p>
                    <form action="#" class="login-form">
                        <input type="text" name="username" id="username" placeholder="Username or email" />
                        <input type="text" name="password" id="password" placeholder="Password" />
                        <a href="#forgot-pw" class="forgot-pw left">Forgot Password?</a>
                        <div>
                            <input type="submit" value="Login" id="login-form-submit" />
                        </div>
                    </form>  
                </div>
            </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    export default {
        name: 'login-modal',
        data () {
            return {
                dialog: false
            }
        }
    }
</script>

<style lang="scss">
    a {
    text-decoration: none;
    color: inherit;
    }

    .left {
    float: left;
    }

    .right {
    float: right;
    }

    /* Contain floats. */
    .cf:after {
    content: ' ';
    display: block;
    clear: both;
    }

    // Modal Base --------------- //

    .login-modal {
        width: 440px;
        height: 480px;
        background-color: white;
    }

    .login-modal .body {
    padding: 16px 36px;
    
    .fb-login {
        display: block;
        line-height: 40px;
        text-align: center;
        color: white;
        font-weight: 800;
        border-radius: 3px;
        height: 40px;
        width: 100%;
        background-color: #5667af;
        transition: background-color 0.4s;
        &:hover {
        background-color: lighten(#5667af, 4%);
        transition: background-color 0.4s;
        }
    }
    
    .or-divider {
        position: relative;
        margin: 26px 0px;
        font-size: 14px;
        font-weight: 600;
        width: 100%;
        height: 0px;
        border: 1px solid #eeeeee;
        span {
        color: #7f7f7f;
        position: relative;
        top: -7px;
        background-color: white;
        padding: 0 8px;
        left: 50%;
        margin-left: -16px;
        }
    }
    
    input#username, input#password {
        outline: none;
        border: 2px solid #eeeeee;
        font-size: 13px;
        font-weight: 400;
        padding: 0 14px;
        width: 368px;
        height: 36px;
        margin-bottom: 16px;
        &:hover {
        border: 2px solid #dddddd;
        }
        &:focus {
        border: 2px solid #cecece;
        }
    }
    
    .forgot-pw {
        font-size: 14px;
        line-height: 32px;
        color: #666;
    }
    
    #login-form-submit {
        float: right;
        outline: 0;
        width: 180px;
        height: 32px;
        background-color: #1e1e1e;
        color: white;
        border: 0;
        font-weight: 600;
        &:hover {
        cursor: pointer;
        background-color: lighten(#1e1e1e, 4%);
        }
    }
    }

    .login-modal footer {
    float: left;
    background-color: #f7f7f7;
    height: 46px;
    width: 100%;
    border-top: 1px solid #e1e1e1;
    color: #a0a0a0;
    font-size: 14px;
    line-height: 46px;
    padding: 0 36px;
    a {
        color: #666;
        font-weight: 600;
    }
    }
</style>
