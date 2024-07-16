package org.thethreesouls.telugu.qurangnanavakyamulu;
import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;
@CapacitorPlugin(name="Zoom")
public class ZoomPlugin extends Plugin{
    @Override
    public void load(){
        this.bridge.getWebView().getSettings().setBuiltInZoomControls(true);
        this.bridge.getWebView().getSettings().setDisplayZoomControls(false);
    }
}
