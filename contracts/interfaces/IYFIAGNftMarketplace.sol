// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IYFIAGNftMarketplace {
    // Event =================================================================================
    event PriceChanged(uint256 _tokenId, uint256 _price, address _tokenAddress, address _user);
    event RoyaltyChanged(uint256 _tokenId, uint256 _royalty, address _user);
    event FundsTransfer(uint256 _tokenId, uint256 _amount, address _user);


    //Function ================================================================================

    function withdraw() external;

    function withdraw(address _user, uint256 _amount) external;

    function withdraw(address _tokenErc20, address _user) external;

    function setPlatformFee(uint256 _newFee) external;

    function getBalance() external view returns(uint256);

    function mint(address _to,string memory _uri, uint256 _royalty, bool _isRoot) external;

    function mintFragment(address _to,uint256 _rootTokenId) external;

    function setPriceAndSell(uint256 _tokenId, uint256 _price, address _token ) external;

    function buy(uint256 _tokenId) external payable;

    function isForSale(uint256 _tokenId) external view returns(bool);

    function setPlatformFeeAddress(address newPlatformFeeAddess) external;

    function burnByLaunchpad(address account,uint256 _tokenId) external;

}