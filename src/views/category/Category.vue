<template>
  <div>
    <h4>分类</h4>
    <div class="wrapper">
      <div class="content">
        <!-- <button @click="btnClick">按钮</button> -->
        <div>分类列表74</div>
        <div>分类列表75</div>
        <div>分类列表76</div>
        <div>分类列表77</div>
        <div>分类列表78</div>
        <div>分类列表79</div>
        <div>分类列表80</div>
        <div>分类列表81</div>
        <div>分类列表82</div>
        <div>分类列表83</div>
        <div>分类列表84</div>
        <div>分类列表85</div>
        <div>分类列表86</div>
        <div>分类列表87</div>
        <div>分类列表88</div>
        <div>分类列表89</div>
        <div>分类列表90</div>
        <div>分类列表91</div>
        <div>分类列表92</div>
        <div>分类列表93</div>
        <div>分类列表94</div>
        <div>分类列表95</div>
        <div>分类列表96</div>
        <div>分类列表97</div>
        <div>分类列表98</div>
        <div>分类列表99</div>
        <div>分类列表100</div>
        <div>分类列表101</div>
        <div>分类列表102</div>
        <div>分类列表103</div>
        <div>分类列表104</div>
        <div>分类列表105</div>
        <div>分类列表106</div>
        <div>分类列表107</div>
        <div>分类列表108</div>
        <div>分类列表109</div>
        <div>分类列表110</div>
        <div>分类列表111</div>
        <div>分类列表112</div>
        <div>分类列表113</div>
        <div>分类列表114</div>
        <div>分类列表115</div>
        <div>分类列表116</div>
        <div>分类列表117</div>
        <div>分类列表118</div>
        <div>分类列表119</div>
        <div>分类列表120</div>
        <div>分类列表121</div>
        <div>分类列表122</div>
        <div>分类列表123</div>
        <div>分类列表124</div>
        <div>分类列表125</div>
        <div>分类列表126</div>
        <div>分类列表127</div>
        <div>分类列表128</div>
        <div>分类列表129</div>
        <div>分类列表130</div>
        <div>分类列表131</div>
        <div>分类列表132</div>
        <div>分类列表133</div>
        <div>分类列表134</div>
        <div>分类列表135</div>
        <div>分类列表136</div>
        <div>分类列表137</div>
        <div>分类列表138</div>
        <div>分类列表139</div>
        <div>分类列表140</div>
        <div>分类列表141</div>
        <div>分类列表142</div>
        <div>分类列表143</div>
        <div>分类列表144</div>
        <div>分类列表145</div>
        <div>分类列表146</div>
        <div>分类列表147</div>
        <div>分类列表148</div>
        <div>分类列表149</div>
        <div>分类列表150</div>
        <div>分类列表151</div>
        <div>分类列表152</div>
        <div>分类列表153</div>
        <div>分类列表154</div>
        <div>分类列表155</div>
        <div>分类列表156</div>
        <div>分类列表157</div>
        <div>分类列表158</div>
        <div>分类列表159</div>
        <div>分类列表160</div>
        <div>分类列表161</div>
        <div>分类列表162</div>
        <div>分类列表163</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  components: {
  },
  mounted() {
    this.scroll = new this.$BScroll('.wrapper', {
      click: true,
      scrollY: true,
      pullDownRefresh: {
        threshold: 30, // 下拉距离超过30px触发pullingDown事件
        stop: 20 // 回弹停留在距离顶部20px的位置
      },
      pullUpLoad: {
        threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
      }
    });
    this.scroll.on('pullingDown', () => {
      console.log('拉下刷新');
      console.log("this sound");
      this.scroll.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
    }),
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载');
        // 做些事情
        this.scroll.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
      })
  },
  methods: {
  },
};
</script>

<style>
.wrapper {
  height: 150px;
  background: #eee;
  overflow: hidden;
  /*  overflow-y: scroll; */
}
</style>
