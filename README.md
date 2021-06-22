<br />
<p align="center">
    <a href="https://github.com/miraiPr0ject/miraiv2">
        <img src="https://i.imgur.com/sxW5AWa.png" alt="Logo">
    </a>

<h3 align="center">MiraiBot</h3>

<p align="center">
    A simple Facebook Messenger Bot made by me(CatalizCS) and my brother SpermLord.
    <br />
    <br />
    <a href="https://github.com/miraiPr0ject/miraiv2/issues">Report Bug</a>
    ·
    <a href="https://github.com/miraiPr0ject/miraiv2/pulls">Request Feature</a>
    </p>
</p>

<p align="center">
	<img alt="size" src="https://img.shields.io/github/repo-size/miraiPr0ject/miraiv2.svg?style=flat-square&label=size">
	<img alt="code-version" src="https://img.shields.io/badge/dynamic/json?color=red&label=code%20version&prefix=v&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2FmiraiPr0ject%2Fmiraiv2%2Fmaster%2Fpackage.json&style=flat-square">
	<a href="https://github.com/miraiPr0ject/miraiv2/commits"><img alt="commits" src="https://img.shields.io/github/commit-activity/m/miraiPr0ject/miraiv2.svg?label=commit&style=flat-square"></a>
    <img alt="visitors" src="https://visitor-badge.laobi.icu/badge?page_id=miraiPr0ject.miraiv2">
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#introduce">Giới thiệu</a></li>
        <li><a href="#Installation">Hướng dẫn cài đặt</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
    </ol>
</details>

<!-- ABOUT THE PROJECT -->
## introduce
<p><strong>MIRAIPROJECT LÀ GÌ?</strong></p>
<br />
<p>
<strong>MiraiProject</strong> thật chất là một dự án mang đến Messenger một trải nghiệm mới cho người dùng bằng cách xây dựng một hệ thống bot dành riêng cho messenger facebook. Dự án này được <strong>Catalizcs</strong>(Founder) và <strong>SpermLord</strong>(Co-Founder) xây dựng và duy trì.
</p>

![miraiv2-product](https://miraiproject.tk/images/demo.png)


<!-- INSTALLATION -->
## Installation

Sau đây là các bước cơ bản để có thể cài đặt và vận hành.

### Yêu cầu

- Dung lượng của máy phải trống tầm 1-2gb.
- Cần một số phần mềm chỉnh sửa file, khuyến khích sử dụng [notepad++](https://notepad-plus-plus.org/downloads/) hoặc [sublime text 3](https://www.sublimetext.com/3)
- Cần hiểu biết sơ lược qua về node, javascript.
- Một tài khoản Facebook dùng để làm bot(Khuyến khích nên sử dụng acc đã bỏ hoặc không còn sử dụng để tránh mất acc hay acc bị khoá).
- Đối với:
    - Windows: Cần cài đặt windows-build-tools.
    - Linux: Cần cài đặt python3 hoặc python2.
    - Android Sử dụng termux để vận hành bot.

### Cài Đặt

#### Windows

1. Tải về [Nodejs](https://nodejs.org/en/) và [git](https://git-scm.com/) sau đó cài đặt
    1. Nếu bạn window 7 trở xuống và không thể cài đặt nodejs thì có thể tải file cài đặt nodejs [tại đây(win 64bit)](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x64.msi) hoặc [tại đây(win 32bit)](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x86.msi)

2. Cài đặt windows-build-tools:
    1. Mở powershell với quyền adminstrator thông qua startMenu
    2. Nhập 
     ```sh
     npm install windows-build-tools
     ```

3. Clone source code của bot
    1. chuột phải ở folder cần cài đặt source code nhấn vào git bash
    2. nhập
    ```sh
    git clone https://github.com/miraipr0ject/miraiv2.git miraiv2
    ``` 

4. Cài đặt các package cần thiết
    1. Mở cmd/terminal ở thư mục bot, LƯU Ý thư mục đó phải có file package.json
    2. Nhập
    ```sh
    npm install
    ```

5. Chỉnh sửa file config
    1. Mở file config.json thông qua notepad++ hoặc sublime text 3 đã cài đặt ở trên
    2. tùy chỉnh mail, password, tên bot, ...
    3. Sao lưu và đóng lại

6. Lấy appstate
    - Bạn có thể sử dụng fbstate của c3c bot, nhưng cần đổi tên lại thành appstate.json hoặc đổi lại tên trong phần config.json như bước ở trên
    1. Nhập
    ```sh
    node login
    ```
    2. Nhập mã xác thực hai lớp
    3. Nếu trên cmd/terminal hiện ```Đã ghi xong appstate``` tức là appstate của bạn đã được lưu lại, còn nếu ra dòng có chữ error thì appstate của bạn chưa được lưu lại, bạn cần phải kiểm tra lại thông tin tài khoản, và kiểm tra xem tài khoản của bạn có phải bị checkpoint hay không.

7. Chạy bot và tận hưởng
    1. Nhập
    ```sh
      npm start
      ```
    2. Đợi source code load file và tận hưởng!

#### Android

1. Sử dụng google play và tải termux

2. Mở termux và nhập
    ```sh
    termux-setup-storage && apt update && apt upgrade && pkg install curl -y && bash <(curl -s https://raw.githubusercontent.com/catalizcs/storage-data/master/install.sh)
    ```

3. Đợi mọi package, lib cài đặt thành công là có thể sử dụng

4. Lấy appstate
    - Bạn có thể sử dụng fbstate của c3c bot, nhưng cần đổi tên lại thành appstate.json hoặc đổi lại tên trong config.json
    1. Nhập
    ```sh
    node login
    ```
    2. Nhập mã xác thực hai lớp
    3. Nếu trên cmd/terminal hiện ```Đã ghi xong appstate``` tức là appstate của bạn đã được lưu lại, còn nếu ra dòng có chữ error thì appstate của bạn chưa được lưu lại, bạn cần phải kiểm tra lại thông tin tài khoản, và kiểm tra xem tài khoản của bạn có phải bị checkpoint hay không.

5. về cách sử dụng, edit, vận hành
      1. Để bật được file manager bạn chỉ cần nhập vào termux
      ```sh
      manager
      ```
      2. Để vận hành bot, bạn chỉ cần nhập vào termux
      ```sh
      cd ./miraiv2 && npm start
      ```

#### Linux/ubuntu

1. Cài đặt node và git bằng cách nhập vào terminal
    ```sh
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install nodejs git sqlite3 -y
    sudo npm install -g npm
    ```

2. Clone source code của bot bằng cách nhập vào terminal
    ```sh
    git clone https://github.com/miraipr0ject/miraiv2.git miraiv2
    ```

3. Cài đặt các package cần thiết
    1. Mở cmd/terminal ở thư mục bot, LƯU Ý thư mục đó phải có file package.json
    2. Nhập
    ```sh
    npm install
    ``` 

4. Chỉnh sửa file config
    1. Mở file config.json thông qua notepad++ hoặc sublime text 3 đã cài đặt
    2. tùy chỉnh mail, password, tên bot, ...
    3. Sao lưu và đóng lại

5. Lấy appstate
    - Bạn có thể sử dụng fbstate của c3c bot, nhưng cần đổi tên lại thành appstate.json hoặc đổi lại tên trong phần config.json như bước ở trên
    1. Nhập
    ```sh
    node login
    ```
    2. Nhập mã xác thực hai lớp
    3. Nếu trên cmd/terminal hiện ```Đã ghi xong appstate``` tức là appstate của bạn đã được lưu lại, còn nếu ra dòng có chữ error thì appstate của bạn chưa được lưu lại, bạn cần phải kiểm tra lại thông tin tài khoản, và kiểm tra xem tài khoản của bạn có phải bị checkpoint hay không.

6. Chạy bot và tận hưởng
    1. Nhập
    ```sh
      npm start
      ```
    2. Đợi source code load file và tận hưởng!

#### Video hướng dẫn cài đặt

1. Windows: [Tutorial install for win 10(WIP)]()
2. Linux: [Tutorial install for linux/ubuntu(WIP)]()
3. Android: [Tutorial install for android using termux](https://www.youtube.com/watch?v=xWvzbhA2_jk)


<!-- CONTRIBUTING -->
## Contributing

Sự đóng góp của bạn sẽ khiến cho project ngày càng tốt hơn, các bước để bạn có thể đóng góp

1. Fork project này
2. Tạo một branch mới chứa tính năng của bạn (`git checkout -b feature/AmazingFeature`)
3. Commit những gì bạn muốn đóng góp (`git commit -m 'Add some AmazingFeature'`)
4. Đẩy branch chứa tính năng của bạn lên (`git push origin feature/AmazingFeature`)
5. Tạo một pull request mới và sự đóng góp của bạn đã sẵn sàng để có thể đóng góp!

<!-- LICENSE -->
## License

This project is licensed under the GNU General Public License v3.0 License - see the [LICENSE](LICENSE) file.

<!-- CONTACT -->
## Contact

CatalizCS - [Facebook](https://facebook.com/CatalizCS) - [GitHub](https://github.com/catalizcs) - miraiv2.official@gmail.com

SpermLord - [GitHub](https://github.com/spermlord) - [Facebook](https://fb.me/MyNameIsSpermLord)
