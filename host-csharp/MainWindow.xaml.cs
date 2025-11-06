using System;
using System.IO;
using System.Windows;
using Microsoft.Web.WebView2.Core;


namespace SimpleBrowser
{
public partial class MainWindow : Window
{
public MainWindow()
{
InitializeComponent();
this.Loaded += MainWindow_Loaded;
}


private async void MainWindow_Loaded(object sender, RoutedEventArgs e)
{
var env = await CoreWebView2Environment.CreateAsync();
await webView.EnsureCoreWebView2Async(env);


// ローカルの静的ファイルを読み込む
var exeDir = AppDomain.CurrentDomain.BaseDirectory;
var indexPath = Path.Combine(exeDir, "wwwroot", "index.html");
webView.CoreWebView2.SetVirtualHostNameToFolderMapping(
"app.local",
Path.Combine(exeDir, "wwwroot"),
CoreWebView2HostResourceAccessKind.Allow);


webView.CoreWebView2.Navigate("https://app.local/index.html");
}
}
}
