# Change the Splash Screen for Android Apps built with React Native

**[📹 Video](https://egghead.io/lessons/react-native-change-the-splash-screen-for-android-apps-built-with-react-native)**

## Android Splashscreen

- Open android project in text editor and navigate to `MainActivity.java`
- Add imports
  ```java
  import android.os.bundle
  import com.facebook.react.ReactActivity
  import org.devio.rn.splashscreen.SplashScreen
  ```
- Override `onCreate` method to display splashscreen
  ```java
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
  ```
- Create a `launch_screen.xml` file at `android/app/src/main/res/layout` - creating any directories that don't exist yet - and add the following content
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:orientation="vertical"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:background="@drawable/launch_screen">
  </LinearLayout>
  ```
- Create a `drawable-xhdpi` folder in the same `layout` directory and add the launch screen image - renamed to `launch_screen.png`
- Create a `colors.xml` file if it does not exist at `android/app/src/main/res/values` and populate it with
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <resources>
    <color name="primary_dark">#0066CC</color>
  </resources>
  ```
- Uninstall the app from the emulator, reinstall and launch.

---

📹 [Go to Previous Lesson](https://egghead.io/lessons/react-native-change-the-splash-screen-for-ios-apps-built-with-react-native)
📹 [Go to Next Lesson](https://egghead.io/lessons/react-native-change-the-app-icon-for-react-native-apps-on-ios)
