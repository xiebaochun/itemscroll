/*!
 * jQuery Item Scroll Plugin
 * version: 0.0.1
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 微个日光日
 * http://xiebaochun.github.com/
 */
;(function($) {
   //预定义变量，防止参数缺失
   
   $.fn.itemScroll=function(options){
   	  //默认参数与用户配置合并
   	  var s=$.extend({},{
   	  	//配置默认选项
   	  	_itemLength:3,//子项目的数量
   	  	_index:0,//当前展开的项目
   	  	

   	  },options);
        return this.each(function(){    
           //获取子项目的数量 retrieve the item count
           var itemLength=$(this).children(".product_list").children(".product_list_item").length;
           //console.log("item length:"+itemLength+"type:"+typeof(itemLength));
           var index=s._index;
           var temp=null;//临时变量
          
           var slef=this;
           
           console.log(this);

           $(this).children(".arroy_right").click(function(){
                
                if(index<itemLength-1&&temp!=index){
                
                temp=index;
               $(slef).children(".product_list").children(".product_list_item:eq("+index+")").animate({"left":"-850px"},null,function(){
                    
                    index++;
               });
               $(slef).children(".product_list").children(".product_list_item:eq("+(index+1)+")").animate({"left":"0px"},null,function(){
                    
               });
           }
           });

           $(this).children(".arroy_left").click(function(){
           if(index>0&&temp!=index)
           {
               temp=index;
               $(slef).children(".product_list").children(".product_list_item:eq("+(index)+")").animate({"left":"850px"},null,function(){
                index--;
               });
               $(slef).children(".product_list").children(".product_list_item:eq("+(index-1)+")").animate({"left":"0px"},null,function(){
                
               });
           }
        });
        
    });

   }
	
})(jQuery);