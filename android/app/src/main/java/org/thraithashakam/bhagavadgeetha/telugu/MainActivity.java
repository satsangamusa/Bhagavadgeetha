package org.thraithashakam.bhagavadgeetha.telugu;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState){
        registerPlugin(ZoomPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
