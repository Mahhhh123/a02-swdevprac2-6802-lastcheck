document.getElementById("adoptForm").addEventListener("submit", function(event) {
    // ดึงค่าจากฟอร์ม
    let fullname = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let petCountValue = document.getElementById("pet_count").value;
    let petCount = Number(petCountValue);
    let agreement = document.getElementById("agreement").checked;

    if (fullname.trim() === "") {
        alert("กรุณากรอกชื่อ-นามสกุลผู้ติดต่อ");
        event.preventDefault();
        return;
    }

    if (phone.trim() === "") {
        alert("กรุณากรอกเบอร์ติดต่อ");
        event.preventDefault();
        return;
    } 
    
    else if (!/^[0-9]+$/.test(phone)) {
        alert("กรุณากรอกเบอร์ติดต่อเป็นตัวเลขเท่านั้น (ไม่มีขีดหรือตัวอักษร)");
        event.preventDefault();
        return;
    }

    if (petCountValue === "" || isNaN(petCount)) {
        alert("กรุณากรอกจำนวนสัตว์เลี้ยงเป็นตัวเลข");
        event.preventDefault();
        return;
    }

    if (petCount < 0 || petCount > 100) {
        alert("จำนวนสัตว์เลี้ยงต้องอยู่ระหว่าง 0 ถึง 100 เท่านั้น");
        event.preventDefault();
        return;
    }

    if (!agreement) {
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
        event.preventDefault();
        return;
    }

    alert("ส่งแบบฟอร์มเรียบร้อย ขอบคุณที่สนใจรับอุปการะสุนัข");
});