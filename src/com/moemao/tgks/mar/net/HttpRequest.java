package com.moemao.tgks.mar.net;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Semaphore;

public class HttpRequest
{
    private static int SLEEP_TIME = 4000;
    
    private static final Semaphore semp = new Semaphore(1);
    
    private boolean bDebug = false;
    
    /**
     * 向指定URL发送GET方法的请求
     * 
     * @param url 发送请求的URL
     * @param param 请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
     * @return URL 所代表远程资源的响应结果
     */
    public String sendGet(String url, String param)
    {
        if (bDebug)
        {
            System.out.println(param);
        }
        
        String result = "";
        BufferedReader in = null;
        try
        {
            String urlNameString = url + "?" + param;
            URL realUrl = new URL(urlNameString);
            // 打开和URL之间的连接
            URLConnection connection = realUrl.openConnection();
            // 设置通用的请求属性
            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 建立实际的连接
            connection.connect();
            // 获取所有响应头字段
            Map<String, List<String>> map = connection.getHeaderFields();
            // 遍历所有的响应头字段
            for (String key : map.keySet())
            {
                System.out.println(key + "--->" + map.get(key));
            }
            // 定义 BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
            String line;
            while ((line = in.readLine()) != null)
            {
                result += line;
            }
        }
        catch (Exception e)
        {
            System.out.println("发送GET请求出现异常！" + e);
            e.printStackTrace();
        }
        // 使用finally块来关闭输入流
        finally
        {
            try
            {
                if (in != null)
                {
                    in.close();
                }
            }
            catch (Exception e2)
            {
                e2.printStackTrace();
            }
        }
        try
        {
            byte[] bytes = result.getBytes();
            result = new String(bytes);
        }
        catch (Exception e)
        {
            
        }
        return result;
    }
    
    /**
     * 向指定 URL 发送POST方法的请求
     * 
     * @param url 发送请求的 URL
     * @param param 请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
     * @return 所代表远程资源的响应结果
     * @throws Exception 
     */
    public String sendPost2(String url, String param) throws Exception
    {
        if (bDebug)
        {
            System.out.println(param);
        }
        
        PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try
        {
            semp.acquire();
            
            URL realUrl = new URL(url);
            // 打开和URL之间的连接
            URLConnection conn = realUrl.openConnection();
            
            HttpURLConnection httpUrlConnection = (HttpURLConnection) conn;
            // 设置通用的请求属性
            httpUrlConnection.setRequestProperty("Accept-Encoding", "gzip");
            httpUrlConnection.setRequestProperty("user-agent", "Dalvik/1.6.0 (Linux; U; Android 4.4.3; Nexus 5 Build/KTU84M)");
            httpUrlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            httpUrlConnection.setRequestProperty("X-Unity-Version", "4.6.5f1");
            httpUrlConnection.setRequestProperty("connection", "Keep-Alive");
            // 设置超时
            httpUrlConnection.setReadTimeout(30000);
            httpUrlConnection.setConnectTimeout(30000);
            // 发送POST请求必须设置如下两行
            httpUrlConnection.setDoOutput(true);
            httpUrlConnection.setDoInput(true);
            // Post 请求不能使用缓存
            httpUrlConnection.setUseCaches(false);
            httpUrlConnection.setRequestMethod("POST");
            
            OutputStream outStrm = httpUrlConnection.getOutputStream();
            ObjectOutputStream objOutputStream = new ObjectOutputStream(outStrm);
            objOutputStream.writeObject(param);
            objOutputStream.flush();
            objOutputStream.close();
            
            // 获取URLConnection对象对应的输出流
            //out = new PrintWriter(httpUrlConnection.getOutputStream());
            // 发送请求参数
            //out.print(param);
            // flush输出流的缓冲
            //out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            // update by ken 20150622 在流处理时就应该把编码格式定义好，这样才不会出现问题
            in = new BufferedReader(new InputStreamReader(httpUrlConnection.getInputStream(), "UTF-8"));
            String line;
            while ((line = in.readLine()) != null)
            {
                result += line;
            }
            
            Thread.sleep(SLEEP_TIME);
        }
        catch (Exception e)
        {
            System.out.println("发送 POST 请求出现异常！" + e);
            e.printStackTrace();
            this.notify();
            throw e;
        }
        // 使用finally块来关闭输出流、输入流
        finally
        {
            semp.release();
            
            try
            {
                if (out != null)
                {
                    out.close();
                }
                if (in != null)
                {
                    in.close();
                }
            }
            catch (IOException ex)
            {
                ex.printStackTrace();
            }
        }
        
        try
        {
            byte[] bytes = result.getBytes();
            result = new String(bytes);
            //System.out.println(result);
        }
        catch (Exception e)
        {
            
        }
        
        if (result.contains("�?,"))
        {
            result = result.replace("�?,", "\",");
        }
        if (result.contains("�?}"))
        {
            result = result.replace("�?}", "\"}");
        }
        if (result.contains("�?]"))
        {
            result = result.replace("�?]", "\"]");
        }
        
        if (bDebug)
        {
            System.out.println(result);
        }
        
        return result;
    }
    
    public String sendPost(String url, String param) throws Exception
    {
        if (bDebug)
        {
            System.out.println(param);
        }
        
        PrintWriter out = null;
        BufferedReader in = null;
        String result = "";
        try
        {
            semp.acquire();
            
            URL realUrl = new URL(url);
            // 打开和URL之间的连接
            URLConnection conn = realUrl.openConnection();
            // 设置通用的请求属性
            conn.setRequestProperty("accept", "*/*");
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 设置超时
            conn.setReadTimeout(15000);
            conn.setConnectTimeout(15000);
            // 发送POST请求必须设置如下两行
            conn.setDoOutput(true);
            conn.setDoInput(true);
            // 获取URLConnection对象对应的输出流
            out = new PrintWriter(conn.getOutputStream());
            // 发送请求参数
            out.print(param);
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            // update by ken 20150622 在流处理时就应该把编码格式定义好，这样才不会出现问题
            in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            String line;
            while ((line = in.readLine()) != null)
            {
                result += line;
            }
            
            Thread.sleep(SLEEP_TIME);
        }
        catch (Exception e)
        {
            System.out.println("发送 POST 请求出现异常！" + e);
            e.printStackTrace();
            this.notify();
            throw e;
        }
        // 使用finally块来关闭输出流、输入流
        finally
        {
            semp.release();
            
            try
            {
                if (out != null)
                {
                    out.close();
                }
                if (in != null)
                {
                    in.close();
                }
            }
            catch (IOException ex)
            {
                ex.printStackTrace();
            }
        }
        
        try
        {
            byte[] bytes = result.getBytes();
            result = new String(bytes);
            //System.out.println(result);
        }
        catch (Exception e)
        {
            
        }
        
        if (result.contains("�?,"))
        {
            result = result.replace("�?,", "\",");
        }
        if (result.contains("�?}"))
        {
            result = result.replace("�?}", "\"}");
        }
        if (result.contains("�?]"))
        {
            result = result.replace("�?]", "\"]");
        }
        
        if (bDebug)
        {
            System.out.println(result);
        }
        
        return result;
    }
}
