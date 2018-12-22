<template>
    <Page>
        <ActionBar backgroundColor="blue">
            <StackLayout orientation="horizontal">
                <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
                <Label text="ativeScript" fontSize="24" verticalAlignment="center" />
            </StackLayout>
        </ActionBar>
        <ScrollView orientation="vertical">

        <StackLayout backgroundColor="#fff">
            <Slider value="80" @valueChange="onValueChanged" />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
            <TextField :text="textFieldValue" hint="Enter text..." />
        </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: this.$store.state.he,
        
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #c71f6d;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #c71f6d;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
