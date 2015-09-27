//
//  ThirdViewController.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/26/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import UIKit

class ThirdViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

    @IBOutlet weak var profilePic: UIImageView!
    @IBOutlet weak var statTableView: UITableView!
    var abilityList = ["➢ Wins = 5", "➢ Losses = 7", "➢ Best Score = 54"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        statTableView.registerClass(UITableViewCell.self, forCellReuseIdentifier: "AbilityCell")
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCellWithIdentifier("AbilityCell")
        
        cell?.textLabel?.text = abilityList[indexPath.row]
        
        return cell!
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return abilityList.count
    }
    
    @IBAction func handleTap(recognizer: UITapGestureRecognizer) {
        let imagePicker = UIImagePickerController()
        
        if UIImagePickerController.isSourceTypeAvailable(.Camera) {
            imagePicker.sourceType = .Camera
        }
        else {
            imagePicker.sourceType = .PhotoLibrary
        }
        
        imagePicker.delegate = self
        presentViewController(imagePicker, animated: true, completion: nil)
    }
    
    func imagePickerController(picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : AnyObject]) {
        
//        profilePic.image = info[UIImagePickerControllerOriginalImage] as! UIImage
        
        if let theImage = info[UIImagePickerControllerOriginalImage] {
                profilePic.image = theImage as? UIImage
        }
        
        dismissViewControllerAnimated(true, completion: {} )
        
//        if let indexPath = tableView.indexPathForSelectedRow {
//            let selectedItem = myManager.items[indexPath.row]
//            let photo = info[UIImagePickerControllerOriginalImage] as! UIImage
//            selectedItem.photo = photo
//            myManager.save()
//            dismissViewControllerAnimated(true, completion: { () -> Void in
//                self.tableView.reloadRowsAtIndexPaths([indexPath], withRowAnimation: UITableViewRowAnimation.Automatic)
//            })
//        }
    }
}