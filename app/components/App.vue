<template>
    <Page>
        <ActionBar class="actionBar" title="Lion App" backgroundColor="#FFA63E">
  <!-- <NavigationButton text="Go back" android.systemIcon="ic_partial_secure" @tap="$navigateTo(detailPage)" /> -->
        </ActionBar>
        <GridLayout rows="*, 2*">
            
            <StackLayout row="0">
                <Image class="logo" src="~/assets/images/1.jpg" stretch="none" />

            </StackLayout>

            <StackLayout row="1" class="form" backgroundColor="#FFA63E">
                <label class="formHead" text="Login-form"/>
                <StackLayout class="input-field">
                    <TextField class="textField" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField class="textField" secure hint="Password" autocorrect="false" autocapitalizationType="none"></TextField>
                </StackLayout>

                <Button text="Log In" class="LoginBtn"></Button>

                <label class="link" text="forgit password.."/>
            </StackLayout>

        </GridLayout>
    </Page>
</template>

<script>
// import * as camera from "nativescript-camera";
// import { Image } from "tns-core-modules/ui/image";
// import * as imagepicker from "nativescript-imagepicker";

// import detailPage from './sub-components/detailpage'
// import detailPage2 from './sub-components/detail2'

  export default {
    data() {
      return {
        // msg: this.$store.state.he,
        // detailPage: detailPage,
        // detailPage2: detailPage2,
        // busy: true,
        // listOfItems: ['moh', 'adel', 'hh'],
        // imgsrc: []
      }
    },
    methods: {
        onButtonTap() {
            // camera.takePicture().
            // then((imageAsset) => {
            //     console.log("Result is an image asset instance");
            //     var image = new Image();
            //     image.src = imageAsset;
            // }).catch((err) => {
            //     console.log("Error -> " + err.message);
            // });

            let context = imagepicker.create({
    mode: "multible" // use "multiple" for multiple selection
});

context
    .authorize()
    .then(() => {
        return context.present();
    })
    .then((selection) => {
        selection.forEach((selected) => {
            this.imgsrc.push(selected)
        })
    }).catch((e) => {
        // process error
        console.log(e)
    });
        }
    }
  }
</script>

<style>
.page {
  align-items: center;
  flex-direction: column;
}
.actionBar{
    color: white
}
.logo{
    margin-left: 60;
}
.formHead{
    color:white;
    font-size: 20;
    padding-bottom: 20;
    text-align: center;
}
.form {
  margin-left: 30;
  margin-right: 30;
  height: 55%;
  flex-grow: 2;
  padding-top: 10;
  /* vertical-align: middle; */
  border-radius: 10%;
}
.LoginBtn{
    background: #E35D40;
    color: white;
    border-radius: 50%;
    margin-top: 100px;
    width: 90%;
}
.link{
    color: white;
    font-size: 15;
    padding: 20 0 0 20;
}
</style>