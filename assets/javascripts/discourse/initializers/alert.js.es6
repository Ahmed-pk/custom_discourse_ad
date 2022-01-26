export default {
    name: 'alert',
    initialize() {
        if($(".hover_ad_ak").length==0)
        {
    
            var bottom_ad = document.createElement('div');
            // checking device width
            
            if($(window).width()>500)
            {
                // desktop ad
                
                bottom_ad.innerHTML = '<div class="hover_ad_ak bottom_ad_rm" style="bottom: -5px;width:100%;position: fixed;z-index:9999999999 !important;"><div style="border-top: 3px dotted #cddeff;background-color:rgba(255, 255, 255, 0.4);display:inline-block;width:100%;height:100px;" data-fuse="22541101983"></div></div><img class="bottom_ad_rm" style="background-color: white;border-radius: 25px;height: 24px;float: right;z-index: 3000;position: fixed;cursor: pointer;right: 0px;bottom: 108px;" onmouseover="this.style.cursor = \'pointer\';" onclick="$(&quot;.bottom_ad_rm&quot;).remove()" src="https://howtodiscuss.com/uploads/default/original/2X/f/f5da30f576655cd7891155fd1cc6b254869864d6.png">';
            }
            else
            {
                // mobile ad
                bottom_ad.innerHTML = '<div class="hover_ad_ak bottom_ad_rm" style="bottom: -5px;width:100%;position: fixed;z-index:9999999999 !important;"><div style="border-top: 3px dotted #cddeff;background-color:rgba(255, 255, 255, 0.4);display:inline-block;width:100%;height:100px;" data-fuse="22541579018"></div></div><img class="bottom_ad_rm" style="background-color: white;border-radius: 25px;height: 24px;float: right;z-index: 3000;position: fixed;cursor: pointer;right: 0px;bottom: 108px;" onmouseover="this.style.cursor = \'pointer\';" onclick="$(&quot;.bottom_ad_rm&quot;).remove()" src="https://howtodiscuss.com/uploads/default/original/2X/f/f5da30f576655cd7891155fd1cc6b254869864d6.png">';   
            }
            // pushing ad into page
            console.log("Inserting bottom sticky ad");
            document.body.appendChild(bottom_ad);
            
        }
    
    }
};